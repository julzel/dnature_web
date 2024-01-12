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

export const getAllProducts = async (): Promise<Record<string, TProduct[]>> => {
  try {
    const response = await fetchFromContentful(productsQuery, 'products');
    if (response.error) {
      throw new Error(response.error);
    }

    // Ensure that we have an array here
    const products: TProduct[] = response.data?.productCollection?.items || [];

    return products.reduce((acc: Record<string, TProduct[]>, product: TProduct) => {
      const category = product.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(product);
      return acc;
    }, {});
  } catch (error) {
    console.error('Error fetching all products:', error);
    return {};
  }
};
