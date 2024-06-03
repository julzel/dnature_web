// import {useTranslations} from 'next-intl';

// export default function Index() {
//   const t = useTranslations('Index');
//   return <h1>{t('title')}</h1>;
// }

import ScrollTopButton from '@/components/scroll-to-top-button';
import Hero from './components/Hero';
import Shop from './components/Shop';
import Greeting from './components/Greeting';

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
