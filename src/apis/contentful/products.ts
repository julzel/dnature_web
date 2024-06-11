import { fetchFromContentful } from "./util";
import { TProductCollection } from "@/types/products";

/**
 * The GraphQL query to fetch all products from Contentful.
 */
const productsQuery = `
  query($category: String) {
    productCollection(where: { category_contains: $category }) {
      items {
        productName
        category
        categorySlug
        urlSlug
        medida
        precio
        rating
        imageCollection(limit: 1) {
          items {
            title
            url
          }
        }
        sys {
          id
        }
      }
    }
  }
`;

/**
 * Fetches all products from Contentful.
 * @param category - The category to filter the products by.
 * @returns A promise that resolves to an array of products.
 */
export const getAllProducts = async (
  category?: string
): Promise<TProductCollection> => {
  try {
    const variables = category ? { category } : {};
    const response = await fetchFromContentful(
      productsQuery,
      "products",
      variables
    );
    if (response.error) {
      throw new Error(response.error);
    }

    // Ensure that we have an array here
    return response.data?.productCollection?.items || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
