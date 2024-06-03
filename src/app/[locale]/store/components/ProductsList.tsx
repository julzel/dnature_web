import { Box, Text } from '@chakra-ui/react';
import { TProductCollection } from '@/types/products';
import ProductsGrid from '@/components/products-grid';

type ProductsListProps = {
  list: Record<string, TProductCollection>;
};

const ProductsList = ({ list }: ProductsListProps) => {
  return (
    <Box>
      {Object.keys(list).length === 0 ? (
        <Text>No hay productos disponibles por el momento.</Text>
      ) : (
        Object.entries(list).map(([category, items]) => (
          <Box key={category}>
            <Text fontSize='lg' fontWeight='bold'>
              {category}
            </Text>
            <ProductsGrid items={items} />
          </Box>
        ))
      )}
    </Box>
  );
};

export default ProductsList;