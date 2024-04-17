import Title from '@/components/Titles';
import styles from './Shop.module.scss';
type Props = {};

const Shop = (props: Props) => {
  const shops = [
    {
      name: 'Snacks',
      description: 'Snacks shop 1 content',
      image: '/images/product-types/snacks.jpg',
    },
    {
      name: 'DNA Complete',
      description: 'Recetas Completas shop 2 content',
      image: '/images/product-types/meals.jpg',
    },
    {
      name: 'Suplementos',
      description: 'Suplementos shop 3 content',
      image: '/images/product-types/suplements.jpg',
    },
    {
      name: 'Proteínas',
      description: 'Proteínas shop 4 content',
      image: '/images/product-types/proteins.jpeg',
    },
    {
      name: 'Órganos',
      description: 'Órganos shop 5 content',
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
          {/* <Title type='page'>{shop.name}</Title> */}
          </div>
          {/* <div>
            <Title type='page'>{shop.name}</Title>
            <p>{shop.description}</p>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default Shop;
