// import {useTranslations} from 'next-intl';

// export default function Index() {
//   const t = useTranslations('Index');
//   return <h1>{t('title')}</h1>;
// }

import ScrollTopButton from '@/components/scroll-to-top-button';
import Hero from './sections/Hero';
import Shop from './sections/Shop';
import Greeting from './sections/Greeting';

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <div>
        <Hero />
        <Shop />
        <Greeting />
      </div>
      <ScrollTopButton />
    </>
  );
};

export default Home;
