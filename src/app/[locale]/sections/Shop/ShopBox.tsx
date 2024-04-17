'use client';
import { motion, Variants } from 'framer-motion';
import Title from '@/components/Titles';
import styles from './Shop.module.scss';

type Props = {
  shop: {
    name: string;
    image: string;
  };
  index: number;
};

const itemVariants: Variants = {
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
  offscreen: {
    opacity: 0.25,
    scale: 1.125,
  },
};

const contentVariants: Variants = {
  onscreen: {
    opacity: 1,
    transition: {
      delay: 0.75,
      duration: 0.5,
    },
  },
  offscreen: {
    opacity: 0,
  },
};

const ShopBox = (props: Props) => {
  const { shop, index } = props;
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.25 }}
      key={index}
      className={styles.shopItemContainer}
    >
      <motion.div
        variants={itemVariants}
        className={`${styles.shopItem}`}
        style={{ backgroundImage: `url(${shop.image})` }}
      >
        <div className={styles.overlay} />
        <motion.div variants={contentVariants} className={styles.content}>
          <Title className={styles.contentTitle} type='section'>
            {shop.name}
          </Title>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ShopBox;
