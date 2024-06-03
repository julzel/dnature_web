import Image from 'next/image';
import { Flex, Box } from '@chakra-ui/react';
import { TProduct } from '@/types/products';
import Title from '@/components/Titles';
import CurrencyFormat from '@/components/currency';
import styles from './ProductPreview.module.scss';

type ProductProps = {
  product: TProduct;
  displayCategory?: boolean;
};

const ProductPreview = ({ product, displayCategory }: ProductProps) => {
  const {
    productName,
    category,
    urlSlug,
    medida,
    precio,
    imageCollection,
    sys,
  } = product;
  return (
    <Flex
      justifyContent='space-between'
      backgroundColor='#fdfdfd'
      h='100%'
      p={[2, 4]}
      borderBottom={`1px solid`}
      borderColor={'borderColor'}
    >
      <Flex w={'45%'} flexShrink={0} justifyContent='center'>
        <Image
          src={imageCollection.items[0].url}
          alt={imageCollection.items[0].title}
          width={100}
          height={100}
          layout='responsive'
          objectFit='contain'
        />
      </Flex>
      <Box flex={1} flexShrink={0} pt={4} textAlign='right'>
        <Title
          color='gray.700'
          type='subtitle'
          textTransform='uppercase'
          className={styles.productName}
          mb={1}
        >
          {productName}
        </Title>
        <Title
          color='gray.700'
          type='subtitle-2'
          className={styles.productPrice}
        >
          <CurrencyFormat value={precio} /> {medida && `| ${medida}`}
        </Title>
      </Box>
      {displayCategory && (
        <Box flex={1} flexShrink={0} pt={4} textAlign='right'>
          <Title
            color='gray.700'
            type='subtitle-2'
            className={styles.productCategory}
          >
            {category}
          </Title>
        </Box>
      )}
    </Flex>
  );
};

export default ProductPreview;
