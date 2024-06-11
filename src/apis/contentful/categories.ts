/**
 * This module provides functions for fetching categories from Contentful.
 */

import { fetchFromContentful } from "./util";

/**
 * An array of fallback categories to be used in case of an error while fetching categories from Contentful.
 */
const FALLBACK_CATEGORIES = [
  "Todos",
  "Recetas completas",
  "Suplementos",
  "Órganos",
  "Proteínas",
  "Snacks",
];

/**
 * The GraphQL query to fetch all categories from Contentful.
 */
const categoriesQuery = `
{
  categoryCollection {
    items {
      label
    }
  }
}
`;

/**
 * Fetches all categories from Contentful.
 * @returns A promise that resolves to an array of category labels.
 */
export const getAllCategories = async () => {
  try {
    const response = await fetchFromContentful(categoriesQuery, "categories");
    if (response.error) {
      throw new Error(response.error);
    }
    return response.data.categoryCollection.items.map(
      (item: any) => item.label
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    return FALLBACK_CATEGORIES;
  }
};
