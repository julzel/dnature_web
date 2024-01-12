import { getAllProducts } from '@/apis/contentful/products';

export async function getProducts() {
  const products = await getAllProducts();
  return products;
}

const Store = async () => {
  const products = await getProducts();
  console.log('products');
  console.log(products);
  return (
    <div>
      <span>Store</span>
    </div>
  );
};

export default Store;
