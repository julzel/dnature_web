import SimpleSlider from "@/components/simple-slider";
import { slides } from "./slides";

type Props = {};

const HomeSlider = (props: Props) => {
  return (
    <SimpleSlider
      showNavigation={false}
      slidesData={slides}
      autoplay={false}
      autoplayInterval={7000}
      fullScreen={true}
    />
  );
};

export default HomeSlider;
