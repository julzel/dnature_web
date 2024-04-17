'use client';
import { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type HeaderMotionProps = {
  children: ReactNode;
  className?: string;
};

const HeaderMotion = ({ children, className }: HeaderMotionProps) => {
  // Hook to track scroll progress (0 at the top, 1 at the bottom)
  const { scrollYProgress } = useScroll();

  // Interpolate scroll progress to color values
  const backgroundColor = useTransform(
    scrollYProgress,
    [0.20, 0.25], // Adjust these values based on when you want the color to change
    ['rgba(0, 0, 0, 0)', '#07bbc7'] // From transparent to deep blue
  );

  return (
    <motion.header
      className={className ? className : ''}
      style={{
        backgroundColor,
      }}
    >
      {children}
    </motion.header>
  );
};

export default HeaderMotion;
