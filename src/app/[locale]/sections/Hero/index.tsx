import SimpleSlider from '@/components/simple-slider';
import { slides } from './slides';

type Props = {};

const Hero = (props: Props) => {
  return (
    <SimpleSlider
      showNavigation={false}
      slidesData={slides}
      autoplay={true}
      autoplayInterval={3000}
    />
  );
};

export default Hero;
