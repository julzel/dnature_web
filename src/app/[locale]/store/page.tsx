'use client';
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

import { useStore } from '@/hooks/useStore';
import { TProduct } from '@/types/products';

import styles from './page.module.scss';
import SearchAndFilter from './sections/SearchAndFilter';
import ProductsList from './sections/ProductsList';
import SearchResults from './sections/SearchResults';

const Store = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const { loading, sortAllProductsByCategory } = useStore();
  const [products, setProducts] = useState<Record<string, TProduct[]>>({});
  const [searchResults, setSearchResults] = useState<TProduct[]>([]);
  const [displayResults, setDisplayResults] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');

  // Fetch sorted products only when sortAllProductsByCategory changes
  useEffect(() => {
    const sortedProducts = sortAllProductsByCategory();
    setProducts(sortedProducts);
  }, [sortAllProductsByCategory]);

  // Create a memoized version of filtered products
  const filteredProducts = useMemo(() => {
    if (category) {
      return { [category]: products[category] || [] };
    }
    return products;
  }, [products, category]);

  const handleOnSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value.length > 2) {
      const results = Object.values(products)
        .flat()
        .filter((product) =>
          product.productName.toLowerCase().includes(value.toLowerCase())
        );
      console.log(results);
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

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.store}>
      <SearchAndFilter
        onSearchChange={handleOnSearch}
        searchValue={searchValue}
      />
      {displayResults ? (
        <SearchResults
          results={searchResults}
          onClose={endSearch}
        />
      ) : (
        <ProductsList list={filteredProducts} />
      )}
    </div>
  );
};

export default Store;
