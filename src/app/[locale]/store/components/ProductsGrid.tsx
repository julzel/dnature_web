import { Grid, Box } from '@chakra-ui/react';
import { TProductCollection } from '@/types/products';
import Product from './Product'; // Assuming you have this component

type GridProps = {
  items: TProductCollection;
};

const ProductsGrid = ({ items }: GridProps) => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
      }}
      gap={4}
      alignItems='stretch'
    >
      {items.map((product) => (
        <Box key={product.sys.id}>
          <Product product={product} />
        </Box>
      ))}
    </Grid>
  );
};

export default ProductsGrid;
