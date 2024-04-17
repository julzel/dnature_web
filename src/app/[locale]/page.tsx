// import {useTranslations} from 'next-intl';

// export default function Index() {
//   const t = useTranslations('Index');
//   return <h1>{t('title')}</h1>;
// }

import ScrollTopButton from './sections/ScrollTopButton';
import Hero from './sections/Hero';
import Shop from './sections/Shop';

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <div>
        <Hero />
        <Shop />
      </div>
      <ScrollTopButton />
    </>
  );
};

export default Home;
