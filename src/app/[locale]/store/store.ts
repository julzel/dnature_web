import { getAllProducts } from "@/apis/contentful/products";
import { getAllCategories } from "@/apis/contentful/categories";
import { TProductCollection } from "@/types/products";

const ALL_CATEGORIES = "Todos";

/**
 * Retrieves all categories from the API.
 * @returns A promise that resolves to an array of strings representing the categories.
 */
const getCategories = async (): Promise<string[]> => {
  try {
    const categories = await getAllCategories();
    return [ALL_CATEGORIES, ...categories];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

/**
 * Retrieves all products from the API, optionally filtered by category.
 * @param category - The category to filter the products by.
 * @returns A promise that resolves to an array of products.
 */
const getProducts = async (category?: string): Promise<TProductCollection> => {
  try {
    const products = await getAllProducts(category);
    return products.sort((a, b) => {
      const aRating = a.rating || 100;
      const bRating = b.rating || 100;
      return aRating - bRating; // Sort in descending order. Swap 'aRating' and 'bRating' for ascending order.
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

/**
 * Filters the given products by category.
 * @param products - The array of products to filter.
 * @param category - The category to filter the products by.
 * @returns An array of products filtered by the specified category.
 */
const filterProductsByCategory = (
  products: TProductCollection,
  category: string
): TProductCollection => {
  return products.filter((product) => product.category === category);
};

/**
 * Filters the given products by name.
 * @param products - The array of products to filter.
 * @param name - The name to filter the products by.
 * @returns An array of products filtered by the specified name.
 */
const filterProductsByName = (
  products: TProductCollection,
  name: string
): TProductCollection => {
  return products.filter((product) =>
    product.productName.toLowerCase().includes(name.toLowerCase())
  );
};

export {
  getProducts,
  getCategories,
  filterProductsByCategory,
  filterProductsByName,
};
