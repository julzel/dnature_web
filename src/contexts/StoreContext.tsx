
import { ReactNode, createContext, useState, useEffect } from 'react';
import { getAllProducts } from '@/apis/contentful/products';
import { TProduct, TProductCollection } from '@/types/products';

/**
 * Props for the StoreProvider component.
 */
type StoreProviderProps = {
  children: ReactNode;
};

/**
 * Type definition for the StoreContext.
 */
type StoreContextType = {
  products: TProductCollection;
  error: string | null;
  loading: boolean;
  filterProductsByName: (name: string) => TProductCollection;
  filterProductsByCategory: (category: string) => TProductCollection;
  sortAllProductsByCategory: () => Record<string, TProductCollection>;
  sortProductsByPrice: (
    products: TProductCollection,
    ascending: boolean
  ) => TProductCollection;
};

/**
 * Default values for the StoreContext.
 */
const defaultStoreContext: StoreContextType = {
  products: [],
  error: null,
  loading: true,
  filterProductsByName: () => [],
  filterProductsByCategory: () => [],
  sortAllProductsByCategory: () => ({}),
  sortProductsByPrice: (products, ascending = true) =>
    [...products].sort((a, b) =>
      ascending ? a.precio - b.precio : b.precio - a.precio
    ),
};

/**
 * The StoreContext provides access to the store's products, error state, loading state, and various utility functions.
 */
export const StoreContext =
  createContext<StoreContextType>(defaultStoreContext);

/**
 * The StoreProvider component wraps the application with the StoreContext provider.
 * It fetches the store products and provides them to the child components.
 *
 * @param {StoreProviderProps} props - The props for the StoreProvider component.
 * @returns {JSX.Element} The rendered StoreProvider component.
 */
export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [products, setProducts] = useState<TProductCollection>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStoreProducts();
  }, []);

  /**
   * Fetches the store products from the API.
   * Sets the products state and handles any errors that occur.
   */
  const fetchStoreProducts = async () => {
    setLoading(true);
    try {
      const fetchedProducts = await getAllProducts();
      setProducts(fetchedProducts);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error has occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  /**
   * Sorts all products by category and returns an object with categories as keys and product collections as values.
   *
   * @returns {Record<string, TProductCollection>} An object with categories as keys and product collections as values.
   */
  const sortAllProductsByCategory = (): Record<string, TProductCollection> => {
    const sortedProductsByRating = products.sort((a, b) => {
      const aRating =  a.rating || 100;
      const bRating =  b.rating || 100;
      return aRating - bRating; // Sort in descending order. Swap 'aRating' and 'bRating' for ascending order.
    })
    return sortedProductsByRating.reduce(
      (acc: Record<string, TProductCollection>, product: TProduct) => {
        const category = product.category;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(product);
        return acc;
      },
      {}
    );
  };

  /**
   * Filters products by category.
   *
   * @param {string} category - The category to filter by.
   * @returns {TProductCollection} The filtered product collection.
   */
  const filterProductsByCategory = (category: string): TProductCollection => {
    return products.filter((product) => product.category === category);
  };

  /**
   * Filters products by name.
   *
   * @param {string} name - The name to filter by.
   * @returns {TProductCollection} The filtered product collection.
   */
  const filterProductsByName = (name: string): TProductCollection => {
    return products.filter((product) =>
      product.productName.toLowerCase().includes(name.toLowerCase())
    );
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        error,
        loading,
        filterProductsByName,
        filterProductsByCategory,
        sortAllProductsByCategory,
        sortProductsByPrice: (products, ascending = true) =>
          [...products].sort((a, b) =>
            ascending ? a.precio - b.precio : b.precio - a.precio
          ),
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
