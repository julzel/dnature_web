const CONTENTFUL_SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const CONTENTFUL_ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_KEY;

const contentfulAPIEndpoint = (spaceId: string) =>
  `https://graphql.contentful.com/content/v1/spaces/${spaceId}`;

interface FetchFromContentfulResponse {
  data?: Record<string, any>;
  errors?: Array<{ message: string }>;
}

/**
 * Fetches data from Contentful using the GraphQL API.
 * @param query - The GraphQL query to execute.
 * @param tags - An array of tags to associate with the request.
 * @param variables - The variables to pass to the query.
 * @param additionalHeaders - Additional headers to include in the request.
 * @returns A promise that resolves to the response from the API.
 */
export const fetchFromContentful = async (
  query: string,
  tags: string,
  variables: Record<string, any> = {},
  additionalHeaders: Record<string, string> = {}
): Promise<FetchFromContentfulResponse> => {
  try {
    const response = await fetch(
      contentfulAPIEndpoint(CONTENTFUL_SPACE_ID || ""),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${CONTENTFUL_ACCESS_TOKEN}`,
          ...additionalHeaders,
        },
        body: JSON.stringify({ query, variables }),
        next: { tags: [tags] },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data from Contentful:", error);
    throw error;
  }
};
