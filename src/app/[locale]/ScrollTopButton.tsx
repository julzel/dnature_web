'use client';
import { PiCaretDoubleUp } from 'react-icons/pi';
import FloatingButton from '@/components/floating-button';

type Props = {};

const ScrollTopButton = (props: Props) => {
  const scrollToTheTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return <FloatingButton onClick={scrollToTheTop} icon={<PiCaretDoubleUp />} />;
};

export default ScrollTopButton;
