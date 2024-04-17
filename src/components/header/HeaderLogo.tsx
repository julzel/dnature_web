'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Logo from '@/components/Logo';
import styles from './Header.module.scss';

type Props = {};

const HeaderLogo = (props: Props) => {
  const { scrollYProgress } = useScroll();

  // Interpolate scroll progress to color values
  const opacityIn = useTransform(
    scrollYProgress,
    [0.20, 0.25],
    [0.25, 1]
  );

  return (
    <div className={styles.headerLogo}>
      <motion.div style={{ opacity: opacityIn }}>
        <Logo variant='white' />
      </motion.div>
    </div>
  );
};

export default HeaderLogo;
