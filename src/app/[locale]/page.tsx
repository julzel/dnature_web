// import {useTranslations} from 'next-intl';

// export default function Index() {
//   const t = useTranslations('Index');
//   return <h1>{t('title')}</h1>;
// }

import ScrollTopButton from "@/components/scroll-to-top-button";
import HomeSlider from "./components/home-slider";
import Shop from "./components/shop";
import Greeting from "./components/greeting";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <div>
        <HomeSlider />
        <Shop />
        <Greeting />
      </div>
      <ScrollTopButton />
    </>
  );
};

export default Home;
