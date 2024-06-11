import { Box, Text } from "@chakra-ui/react";
import { TProductCollection } from "@/types/products";
import ProductsGrid from "@/components/products-grid";
import { getProducts } from "../store";

type ProductsListProps = {
  query?: string;
  category?: string;
};

const ProductsList = async ({ query, category }: ProductsListProps) => {
  const products: TProductCollection = await getProducts(category);

  return (
    <Box>
      {products.length === 0 ? (
        <Text>No hay productos disponibles por el momento.</Text>
      ) : (
        <ProductsGrid items={products} />
      )}
    </Box>
  );
};

export default ProductsList;
