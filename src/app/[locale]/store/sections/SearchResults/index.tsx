import { TProductCollection } from '@/types/products';
import Button from '@/components/Button';

type SearchResultsProps = {
  results: TProductCollection;
  onClose: () => void;
};

const SearchResults = ({ results, onClose }: SearchResultsProps) => {
  return (
    <div>
      {results.length === 0 && <p>Lo sentimos, no se han encontrado resultados.</p>}
      <ul>
        {results.map((product: any) => (
          <li key={product.sys.id}>{product.productName}</li>
        ))}
      </ul>
      <Button onClick={onClose}>Close</Button>
    </div>
  );
};

export default SearchResults;
