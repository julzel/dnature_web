import { useEffect } from 'react';

const useScrollPosition = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
      document.body.style.setProperty('--scroll', scrollPosition.toString());
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll, false);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll, false);
  }, []); // Empty array ensures this effect runs only once
};

export default useScrollPosition;