import ShopBox from './ShopBox';
import styles from './Shop.module.scss';
type Props = {};

const Shop = (props: Props) => {
  const shops = [
    {
      name: 'Snacks',
      image: '/images/product-types/snacks.jpg',
    },
    {
      name: 'DNA Complete',
      image: '/images/product-types/meals.jpg',
    },
    {
      name: 'Suplementos',
      image: '/images/product-types/suplements.jpg',
    },
    {
      name: 'Proteínas',
      image: '/images/product-types/proteins.png',
    },
    {
      name: 'Órganos',
      image: '/images/product-types/organs.jpeg',
    },
  ];

  return (
    <div id='products' className={styles.shopGrid}>
      {shops.map((shop, index) => (
        <ShopBox key={index} shop={shop} index={index} />
      ))}
    </div>
  );
};

export default Shop;
