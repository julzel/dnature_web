// import {useTranslations} from 'next-intl';
 
// export default function Index() {
//   const t = useTranslations('Index');
//   return <h1>{t('title')}</h1>;
// }

import Hero from './sections/Hero';

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
      <Hero autoplay={false} autoplayInterval={6000} />
    </div>
  )
}

export default Home