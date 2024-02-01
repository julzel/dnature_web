// import {useTranslations} from 'next-intl';
// const t = useTranslations('Index');
// return <h1>{t('title')}</h1>;
import { Box } from '@chakra-ui/react';

import Hero from './hero';
 
const Index = () => {

  return (
    <Box>
      <Hero />
    </Box>
  );
}

export default Index;