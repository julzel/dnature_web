'use client';

import { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './FloatingButton.module.scss';

type Props = {
  alwaysVisible?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
};

const FloatingButton = (props: Props) => {
  const { scrollYProgress } = useScroll();

  // Interpolate scroll progress to color values
  const opacityIn = useTransform(
    scrollYProgress,
    [0.20, 0.25], // Adjust these values based on when you want the color to change
    [0, 1]
  );

  const buttonContent = <span>{props.icon}</span>;

  if (props.alwaysVisible) {
    return (
      <button
        onClick={props.onClick}
        className={styles.floatingButton}
      >{buttonContent}</button>
    );
  }
  return (
    <motion.button
      onClick={props.onClick}
      style={{ opacity: opacityIn }}
      className={styles.floatingButton}
    >{buttonContent}</motion.button>
  );
};

export default FloatingButton;
