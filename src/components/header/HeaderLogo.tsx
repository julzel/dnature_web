'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Logo from '@/components/Logo';
import styles from './Header.module.scss';

type Props = {};

const HeaderLogo = (props: Props) => {
  // Hook to track scroll progress (0 at the top, 1 at the bottom)
  const { scrollYProgress } = useScroll();

  // Interpolate scroll progress to color values
  const opacityIn = useTransform(
    scrollYProgress,
    [0.5, 1], // Adjust these values based on when you want the color to change
    [0, 1]
  );

  const opacityOut = useTransform(
    scrollYProgress,
    [0.5, 1], // Adjust these values based on when you want the color to change
    [1, 0]
  );

  return (
    <div className={styles.headerLogo}>
      <motion.div style={{ opacity: opacityIn }}>
        <Logo variant='color' />
      </motion.div>
      <motion.div style={{ opacity: opacityOut }}>
        <Logo variant='transparent' />
      </motion.div>
    </div>
  );
};

export default HeaderLogo;
