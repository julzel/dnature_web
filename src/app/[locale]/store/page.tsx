'use client';
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Flex, Box } from '@chakra-ui/react';

import { useStore } from '@/hooks/useStore';
import { TProductCollection } from '@/types/products';

import styles from './page.module.scss';
import SearchAndFilter from './components/SearchAndFilter';
import ProductsList from './components/ProductsList';
import SearchResults from './components/SeachResults';

const Store = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const { loading, sortAllProductsByCategory } = useStore();
  const [products, setProducts] = useState<Record<string, TProductCollection>>(
    {}
  );
  const [searchResults, setSearchResults] = useState<TProductCollection>([]);
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
      <Flex>
        <Box flex={1}>
          {displayResults ? (
            <SearchResults results={searchResults} onClose={endSearch} />
          ) : (
            <ProductsList list={filteredProducts} />
          )}
        </Box>
        <Box width={[0, '20%']} />
      </Flex>
    </div>
  );
};

export default Store;
