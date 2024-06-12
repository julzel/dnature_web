import { Box, Text } from "@chakra-ui/react";
import { TProductCollection } from "@/types/products";
import ProductsGrid from "@/components/products-grid";
import Title from "@/components/Titles";
import { getProducts } from "../../store";

type ProductListProps = {
  query?: string;
  category?: string;
};

const ProductsList = async ({ query, category }: ProductListProps) => {
  const products: TProductCollection = await getProducts(
    query ? "" : category,
    query
  );

  const renderNoProductsMessage = () => (
    <Text>
      {query
        ? "No se encontraron resultados."
        : "No hay productos disponibles por el momento."}
    </Text>
  );

  const renderProductCountMessage = () => (
    <>
      <Box mb={[4, 8]}>
        {query ? (
          <Text>{products.length} resultados.</Text>
        ) : (
          <Text>{products.length} productos.</Text>
        )}
      </Box>
    </>
  );

  return (
    <Box>
      {products.length === 0 ? (
        renderNoProductsMessage()
      ) : (
        <>
          {renderProductCountMessage()}
          <ProductsGrid items={products} />
        </>
      )}
    </Box>
  );
};

export default ProductsList;
