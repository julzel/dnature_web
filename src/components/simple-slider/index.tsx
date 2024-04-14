'use client';
import { useState, useEffect, useCallback, ReactNode } from 'react';
import styles from './SimpleSlider.module.scss';

export type Slide = {
  bgColor?: string;
  title?: string;
  description?: string;
  bgImage?: string;
  jsx?: ReactNode;
};

type Props = {
  showNavigation?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  slidesData: Slide[];
};

function SimpleSlider({
  slidesData,
  showNavigation = true,
  autoplay = false,
  autoplayInterval = 3000,
}: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((currentSlide + 1) % slidesData.length);
  }, [currentSlide, slidesData]);

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slidesData.length) % slidesData.length);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (autoplay) {
      intervalId = setInterval(nextSlide, autoplayInterval);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [currentSlide, autoplay, autoplayInterval, nextSlide]);

  return (
    <div className={styles.slider}>
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={styles.slide}
          style={{
            backgroundColor: slide.bgColor || 'transparent', // Default to 'transparent' if no bgColor provided
            backgroundImage: slide.bgImage ? `url(${slide.bgImage})` : 'none',
            transform: `translateX(${-100 * currentSlide}%)`,
          }}
        >
          {slide.title && <h1>{slide.title}</h1>}
          {slide.description && <p>{slide.description}</p>}
          {/* {slide.image && (
            <img src={slide.image} alt={slide.title || 'Slide'} />
          )} */}
          {slide.jsx}
        </div>
      ))}
      {showNavigation && (
        <div className={styles.controls}>
          <button onClick={prevSlide}>Prev</button>
          <button onClick={nextSlide}>Next</button>
        </div>
      )}
    </div>
  );
}

export default SimpleSlider;
