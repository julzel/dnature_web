import { ReactNode, createContext, useState, useEffect } from 'react';
import { getAllProducts } from '@/apis/contentful/products';
import { TProduct } from '@/types/products';

type StoreProviderProps = {
  children: ReactNode;
};

export const StoreContext = createContext({
  products: [] as TProduct[],
  error: null as string | null,
  loading: true,
  filterProductsByName: (name: string): TProduct[] => [],
  filterProductsByCategory: (category: string): TProduct[] => [],
  sortAllProductsByCategory: (): Record<string, TProduct[]> => ({}),
  sortProductsByPrice: (
    products: TProduct[],
    ascending: boolean
  ): TProduct[] => [],
});

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStoreProducts();
  }, []);

  const fetchStoreProducts = async () => {
    setLoading(true);
    try {
      const fetchedProducts = await getAllProducts();
      setProducts(fetchedProducts);
    } catch (err: any) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error has occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  const sortAllProductsByCategory = (): Record<string, TProduct[]> => {
    return products.reduce(
      (acc: Record<string, TProduct[]>, product: TProduct) => {
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

  const filterProductsByCategory = (category: string): TProduct[] => {
    return products.filter((product) => product.category === category);
  };

  const filterProductsByName = (name: string): TProduct[] => {
    return products.filter((product) =>
      product.productName.toLowerCase().includes(name.toLowerCase())
    );
  };

  const sortProductsByPrice = (products: TProduct[], ascending?: boolean) => {
    if (ascending) {
      return products.sort((a, b) => b.precio - a.precio);
    }
    return products.sort((a, b) => a.precio - b.precio);
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
        sortProductsByPrice,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
