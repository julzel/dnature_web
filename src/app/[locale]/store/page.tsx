'use client';
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

import { useStore } from '@/hooks/useStore';
import { TProduct } from '@/types/products';

import styles from './page.module.scss';
import SearchAndFilter from './sections/SearchAndFilter';
import ProductsList from './sections/ProductsList';

const Store = () => {
  const searchParams = useSearchParams();
  const category = searchParams.get('category');
  const { loading, sortAllProductsByCategory } = useStore();
  const [products, setProducts] = useState<Record<string, TProduct[]>>({});

  // Use `useEffect` to fetch sorted products only when sortAllProductsByCategory changes
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

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.store}>
      <SearchAndFilter />
      <ProductsList list={filteredProducts} />
    </div>
  );
};

export default Store;
