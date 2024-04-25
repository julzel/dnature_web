'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Logo from '@/components/Logo';

const AnimatedLogo = () => {
  const { scrollYProgress } = useScroll();

  // Interpolate scroll progress to color values
  const opacityOut = useTransform(scrollYProgress, [0.2, 0.25], [1, 0]);

  const opacityIn = useTransform(scrollYProgress, [0.2, 0.25], [0, 1]);

  return (
    <>
      <motion.div style={{ opacity: opacityIn }}>
        <Logo variant='color' />
      </motion.div>
      <motion.div style={{ opacity: opacityOut }}>
        <Logo variant='white' />
      </motion.div>
    </>
  );
};

export default AnimatedLogo;
