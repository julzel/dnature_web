'use client';
import { useState } from 'react';
import styles from './Hero.module.scss';

type Props = {};

const slides = [
  {
    title: 'Slide 1',
    description: 'Slide 1 description',
    bgColor: '#4dd9e5',
    // image: 'https://via.placeholder.com/800x400',
  },
  {
    title: 'Slide 2',
    description: 'Slide 2 description',
    bgColor: '#26cfde',
    // image: 'https://via.placeholder.com/800x400',
  },
  {
    title: 'Slide 3',
    description: 'Slide 3 description',
    bgColor: '#07bbc7',
    // image: 'https://via.placeholder.com/800x400',
  },
  {
    title: 'Slide 4',
    description: 'Slide 4 description',
    bgColor: '#06a8b3',
    // image: 'https://via.placeholder.com/800x400',
  },
  {
    title: 'Slide 5',
    description: 'Slide 5 description',
    bgColor: '#058a95',
    // image: 'https://via.placeholder.com/800x400',
  },
];

function Hero({}: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  // let's implement the logic to change the current slide

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.hero}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={styles.slide}
          style={{
            backgroundColor: slide.bgColor,
            transform: `translateX(${-100 * currentSlide}%)`,
          }}
        >
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>
          {/* <img src={slide.image} alt={slide.title} /> */}
        </div>
      ))}
      <div className={styles.controls}>
        <button onClick={prevSlide}>Prev</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
}

export default Hero;
