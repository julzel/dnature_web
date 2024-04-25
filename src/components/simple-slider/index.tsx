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

type SimpleSliderProps = {
  showNavigation?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  slidesData: Slide[];
  fullScreen?: boolean;
};

function SimpleSlider({
  slidesData,
  showNavigation = true,
  autoplay = false,
  autoplayInterval = 3000,
  fullScreen = false,
}: SimpleSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState(0);
  const [moveX, setMoveX] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((currentSlide + 1) % slidesData.length);
  }, [currentSlide, slidesData]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((currentSlide - 1 + slidesData.length) % slidesData.length);
  }, [currentSlide, slidesData]);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setStartX(touch.clientX);
    setMoveX(0); // Reset move distance on new touch
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    setMoveX(startX - touch.clientX);
  };

  const handleTouchEnd = () => {
    if (moveX > 50) { // Right swipe
      nextSlide();
    } else if (moveX < -50) { // Left swipe
      prevSlide();
    }
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
    <div
      className={styles.slider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slidesData.map((slide, index) => (
        <div
          key={index}
          className={styles.slide}
          style={{
            backgroundColor: slide.bgColor || 'transparent',
            backgroundImage: slide.bgImage ? `url(${slide.bgImage})` : 'none',
            transform: `translateX(${-100 * currentSlide}%)`,
            height: fullScreen ? '100vh' : 'auto',
          }}
        >
          {slide.title && <h1>{slide.title}</h1>}
          {slide.description && <p>{slide.description}</p>}
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
