import SimpleSlider from "@/components/simple-slider"
import { slides } from "./slides"

type Props = {}

const Hero = (props: Props) => {
  return (
    <div>
      <SimpleSlider
        slidesData={slides}
        showNavigation={true}
        autoplay={true}
        autoplayInterval={3000}
      />
    </div>
  )
}

export default Hero