'use client';
import { useRef } from 'react';
import Button from '@/components/Button';
import Title from '@/components/Titles';
import styles from './Hero.module.scss';

const HEADER_HEIGHT = 80; // this value should match --header-height global.css

const Slide1 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    const containerHeight = containerRef.current?.clientHeight || 0;

    window.scrollTo({ top: containerHeight - HEADER_HEIGHT, behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className={`${styles.heroSlide} ${styles.slide1}`}>
      <div>
        <Title type='banner' className={styles.heroTitle}>
          Nutrición premium
        </Title>
        <Title type='subtitle' className={styles.heroSubtitle}>
          <span>100% natural</span>
        </Title>
      </div>
      <div>
        <Button
          onClick={scrollToNext}
          size={'lg'}
          className={styles.heroButton}
          variant='secondary-ol-white'
        >
          Descubre más
        </Button>
      </div>
    </div>
  );
};

export default Slide1;
