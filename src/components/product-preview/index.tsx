import { Flex, Box } from "@chakra-ui/react";
import { TProduct } from "@/types/products";
import Title from "@/components/Titles";
import CurrencyFormat from "@/components/currency";
import ResponsiveImage from "@/components/responsive-image";
import styles from "./ProductPreview.module.scss";

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
    <Box backgroundColor="gray.100" h="100%">
      <Flex width="100%" justifyContent="center" p={8} backgroundColor="white">
        <ResponsiveImage
          src={imageCollection.items[0].url}
          alt={imageCollection.items[0].title}
          aspectRatioName="square"
        />
      </Flex>
      <Box flex={1} flexShrink={0} p={4} textAlign="right">
        <Title
          color="gray.700"
          type="subtitle"
          textTransform="uppercase"
          className={styles.productName}
          mb={1}
        >
          {productName}
        </Title>
        <Title
          color="gray.700"
          type="subtitle-2"
          className={styles.productPrice}
        >
          <CurrencyFormat value={precio} /> {medida && `| ${medida}`}
        </Title>
      </Box>
      {displayCategory && (
        <Box flex={1} flexShrink={0} pt={4} textAlign="right">
          <Title
            color="gray.700"
            type="subtitle-2"
            className={styles.productCategory}
          >
            {category}
          </Title>
        </Box>
      )}
    </Box>
  );
};

export default ProductPreview;
