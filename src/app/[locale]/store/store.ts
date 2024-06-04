import { getAllProducts } from '@/apis/contentful/products';
import { TProduct, TProductCollection } from '@/types/products';

const getProducts = async (): Promise<TProductCollection> => {
  try {
    return await getAllProducts();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

const getCategories = (products: TProductCollection): string[] => {
  return products.reduce((acc, product) => {
    if (!acc.includes(product.category)) {
      acc.push(product.category);
    }
    return acc;
  }, [] as string[]);
};

const filterProductsByCategory = (
  products: TProductCollection,
  category: string
): TProductCollection => {
  return products.filter((product) => product.category === category);
};

const filterProductsByName = (
  products: TProductCollection,
  name: string
): TProductCollection => {
  return products.filter((product) =>
    product.productName.toLowerCase().includes(name.toLowerCase())
  );
};

const getProductsSortedByCategory = (
  products: TProductCollection
): Record<string, TProductCollection> => {
  const sortedProductsByRating = products.sort((a, b) => {
    const aRating = a.rating || 100;
    const bRating = b.rating || 100;
    return aRating - bRating; // Sort in descending order. Swap 'aRating' and 'bRating' for ascending order.
  });
  const categories: string[] = [];
  return sortedProductsByRating.reduce(
    (acc: Record<string, TProductCollection>, product: TProduct) => {
      const category = product.category;
      if (!acc[category]) {
        categories.push(category);
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    },
    {}
  );
};

export {
  getProducts,
  getCategories,
  getProductsSortedByCategory,
  filterProductsByCategory,
  filterProductsByName,
};
