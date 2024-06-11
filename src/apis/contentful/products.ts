import { fetchFromContentful } from "./util";
import { TProductCollection } from "@/types/products";

/**
 * The GraphQL query to fetch products from Contentful.
 */
const productsQuery = `
  query($category: String, $query: String) {
    productCollection(
      where: {
        AND: [
          { category_contains: $category }
          { OR: [
              { productName_contains: $query }
              { category_contains: $query }
          ]}
        ]
      }
    ) {
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
 * Fetches products from Contentful based on category and/or search query.
 * @param category - The category to filter the products by.
 * @param query - The search query to filter the products by.
 * @returns A promise that resolves to an array of products.
 */
export const getProducts = async (
  category?: string,
  query?: string
): Promise<TProductCollection> => {
  try {
    const variables = { category: category || "", query: query || "" };
    const response = await fetchFromContentful(
      productsQuery,
      "products",
      variables
    );
    if (response.errors) {
      throw new Error(response.errors[0].message);
    }

    // Ensure that we have an array here
    return response.data?.productCollection?.items || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
