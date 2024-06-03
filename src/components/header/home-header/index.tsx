'use client';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PiPawPrint } from 'react-icons/pi';
import Logo from '@/components/Logo';
import headerStyles from '../Header.module.scss';

const HomeHeader = () => {
  // Hook to track scroll progress (0 at the top, 1 at the bottom)
  const { scrollYProgress } = useScroll();

  // Interpolate scroll progress

  const backgroundColor = useTransform(
    scrollYProgress,
    [0.2, 0.25],
    ['rgba(0, 0, 0, 0)', '#fff']
  );

  const opacityOut = useTransform(scrollYProgress, [0.2, 0.25], [1, 0]);

  const opacityIn = useTransform(scrollYProgress, [0.2, 0.25], [0, 1]);

  return (
    <motion.header
      className={headerStyles.header}
      style={{
        backgroundColor,
        borderBottom: 'none',
      }}
    >
      <Link href='/' className={headerStyles.headerLogo}>
        <motion.div style={{ opacity: opacityIn }}>
          <Logo variant='color' />
        </motion.div>
        <motion.div style={{ opacity: opacityOut }}>
          <Logo variant='white' />
        </motion.div>
      </Link>
      <button className={headerStyles.menuButton}>
        <motion.span
          className={headerStyles.icon}
          style={{ opacity: opacityIn, color: 'var(--dark-text)' }}
        >
          <PiPawPrint />
        </motion.span>
        <motion.span
          className={headerStyles.icon}
          style={{ opacity: opacityOut, color: 'var(--light-text)' }}
        >
          <PiPawPrint />
        </motion.span>
      </button>
    </motion.header>
  );
};

export default HomeHeader;
