'use client';
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import {
  getProducts,
  getCategories,
  getProductsSortedByCategory,
} from './store';
import { TProductCollection } from '@/types/products';

import styles from './page.module.scss';
import SearchAndFilter from './components/SearchAndFilter';
import ProductsList from './components/ProductsList';
import SearchResults from './components/SeachResults';

const searchInProducts = (products: TProductCollection, value: string) => {
  return Object.values(products)
    .flat()
    .filter((product) =>
      product.productName.toLowerCase().includes(value.toLowerCase())
    );
};

const ALL_CATEGORIES = 'Todos';

const Store = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const [products, setProducts] = useState<TProductCollection>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [productsByCategory, setProductsByCategory] = useState<
    Record<string, TProductCollection>
  >({});
  const [searchResults, setSearchResults] = useState<TProductCollection>([]);
  const [displayResults, setDisplayResults] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  const filteredProducts = useMemo(() => {
    if (category) {
      return { [category]: productsByCategory[category] || [] };
    }
    return productsByCategory;
  }, [category, productsByCategory]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts();
      setProducts(products);
      const productCategories = getCategories(products);
      setCategories([ALL_CATEGORIES, ...productCategories]);
      setProductsByCategory(getProductsSortedByCategory(products));
    };

    fetchData();
  }, [categories]);

  const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value.length > 2) {
      const results = searchInProducts(products, value);
      setSearchResults(results);
      setDisplayResults(true);
    } else {
      setDisplayResults(false);
    }
  };

  const endSearch = () => {
    setDisplayResults(false);
    setSearchValue('');
  };

  const handleCategoryChange = (value: string) =>
    value === ALL_CATEGORIES
      ? router.push('/store')
      : router.push(`/store?category=${value}`);

  return (
    <div className={styles.store}>
      <SearchAndFilter
        categories={categories}
        onSearchChange={handleOnSearch}
        searchValue={searchValue}
        selectedCategory={category || ALL_CATEGORIES}
        setSelectedCategory={handleCategoryChange}
      />
      {displayResults ? (
        <SearchResults results={searchResults} onClose={endSearch} />
      ) : (
        <ProductsList list={filteredProducts} />
      )}
    </div>
  );
};

export default Store;
