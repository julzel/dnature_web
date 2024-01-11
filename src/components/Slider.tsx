import { Box } from '@chakra-ui/react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay.js';
import 'react-awesome-slider/dist/styles.css';


const AutoplaySlider = withAutoplay(AwesomeSlider);

type SliderProps = {
  height?: string;
  children?: React.ReactNode;
};

const Slider: React.FC<SliderProps> = ({ height, children }) => {
  return (
    <Box height={height || 'auto'}>
      <AutoplaySlider
        play={true}
        bullets={false}
        mobileTouch={true}
        infinite={true}
        organicArrows={false}
      >
        {/* {children} */}
        <div>1</div>
        <div>2</div>
        <div>3</div>
        
      </AutoplaySlider>
    </Box>
  );
};

export default Slider;
