'use client';
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

import { useStore } from '@/hooks/useStore';
import { TProduct } from '@/types/products';

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

  return (
    <div>
      <h1>Store</h1>
      {loading ? (
        <p>Loading...</p>
      ) : Object.keys(filteredProducts).length === 0 ? (
        <p>No products available.</p>
      ) : (
        Object.entries(filteredProducts).map(([category, items]) => (
          <div key={category}>
            <h2>{category}</h2>
            <ul>
              {items.map((product) => (
                <li key={product.sys.id}>{product.productName}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default Store;
