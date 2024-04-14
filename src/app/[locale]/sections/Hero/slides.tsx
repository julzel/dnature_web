import Title from '@/components/Titles';
import styles from './Hero.module.scss';
import Button from '@/components/Button';

const Slide1 = () => (
  <div className={`${styles.heroSlide} ${styles.slide1}`}>
    <div>
      <Title type='page' className={styles.heroTitle}>
        Nutrición premium
      </Title>
      <Title type='subtitle' className={styles.heroSubtitle}>
        <span>100% natural</span>
      </Title>
    </div>
    <div className={styles.heroCTA}>
      <Button variant='secondary'>Descubre más</Button>
    </div>
  </div>
);

export const slides = [
  {
    bgColor: '#4dd9e5',
    bgImage: '/images/home/slide-1.jpg',
    jsx: <Slide1 />,
  },
  // {
  //   title: 'Slide 2',
  //   description: 'Productos',
  //   bgColor: '#26cfde',
  //   // bgImage: 'https://via.placeholder.com/800x400',
  // },
  // {
  //   title: 'Slide 3',
  //   description: 'Nutrición',
  //   bgColor: '#07bbc7',
  //   // bgImage: 'https://via.placeholder.com/800x400',
  // },
  // {
  //   title: 'Slide 4',
  //   description: 'Perfil veterinario',
  //   bgColor: '#06a8b3',
  //   // bgImage: 'https://via.placeholder.com/800x400',
  // },
];
