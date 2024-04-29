import { TProduct } from '@/types/products';

type ProductsListProps = {
  list: Record<string, TProduct[]>;
};

const ProductsList = ({ list }: ProductsListProps) => {
  return (
    <div>
      {Object.keys(list).length === 0 ? (
        <p>No products available.</p>
      ) : (
        Object.entries(list).map(([category, items]) => (
          <div key={category}>
            <h2>{category}</h2>
            <ul>
              {items.map((product) => (
                <li key={product.sys.id}>{product.productName}</li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductsList;
