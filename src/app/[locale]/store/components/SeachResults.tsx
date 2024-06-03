import { Box, Center } from '@chakra-ui/react';
import { TProductCollection } from '@/types/products';
import Button from '@/components/Button';
import ProductsGrid from '@/components/products-grid';

type SearchResultsProps = {
  results: TProductCollection;
  onClose: () => void;
};

const SearchResults = ({ results, onClose }: SearchResultsProps) => {
  return (
    <Box>
      {results.length === 0 && (
        <p>Lo sentimos, no se han encontrado resultados.</p>
      )}
      <ProductsGrid items={results} />
      <Center pt={[8, 16]}>
        <Button onClick={onClose}>Regresar</Button>
      </Center>
    </Box>
  );
};

export default SearchResults;
