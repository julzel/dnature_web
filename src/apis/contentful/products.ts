import { fetchFromContentful } from "./util";
import { TProductCollection } from "@/types/products";

// const productsQuery = `
// {
//   productCollection {
//     items {
//       productName
//       category
//       categorySlug
//       urlSlug
//       medida
//       precio
//       rating
//       imageCollection(limit: 1) {
//         items {
//           title
//           url
//         }
//       }
//       sys {
//         id
//       }
//     }
//   }
// }
// `;

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
