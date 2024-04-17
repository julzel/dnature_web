import Title from '@/components/Titles';
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
      image: '/images/product-types/proteins.jpeg',
    },
    {
      name: 'Órganos',
      image: '/images/product-types/organs.jpeg',
    },
  ];

  return (
    <div id='products' className={styles.shopGrid}>
      {shops.map((shop, index) => (
        <div
          key={index}
          className={`${styles.shopItem}`}
          style={{ backgroundImage: `url(${shop.image})` }}
        >
          <div className={styles.overlay} />
          <div className={styles.content} >
            <Title className={styles.contentTitle} type='section'>{shop.name}</Title>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
