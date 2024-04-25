import { fetchFromContentful } from './util';
import { TProduct } from '@/types/products';

const productsQuery = `
{
  productCollection {
    items {
      productName
      category
      categorySlug
      urlSlug
      medida
      precio
      rating
      imageCollection {
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

export const getAllProducts = async (): Promise<TProduct[]> => {
  try {
    const response = await fetchFromContentful(productsQuery, 'products');
    if (response.error) {
      throw new Error(response.error);
    }

    // Ensure that we have an array here
    return response.data?.productCollection?.items || [];

  } catch (error) {
    console.error('Error fetching all products:', error);
    return [];
  }
};
