import { ReactNode } from "react";
import { Grid, Box } from "@chakra-ui/react";
import { TProductCollection } from "@/types/products";
import ProductPreview from "../product-preview"; // Assuming you have this component
import React from "react";

interface GridTemplateProps {
  children: ReactNode;
}

interface GridProps {
  items: TProductCollection;
}

const GridTemplate = ({ children }: GridTemplateProps) => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
      }}
      gap={[4]}
      alignItems="stretch"
    >
      {children}
    </Grid>
  );
};

export const ProductsGridSkeleton = () => {
  return (
    <GridTemplate>
      {[...Array(6)].map((_, index) => (
        <Box
          key={index}
          height="300px" // Adjust height to match the ProductPreview height
          bg="gray.100"
          borderRadius="md"
          p={4}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box height="150px" bg="gray.200" borderRadius="md" mb={4} />
          <Box height="20px" bg="gray.200" borderRadius="md" mb={2} />
        </Box>
      ))}
    </GridTemplate>
  );
};

const ProductsGrid = ({ items }: GridProps) => {
  return (
    <GridTemplate>
      {items.map((product) => (
        <Box key={product.sys.id}>
          <ProductPreview product={product} />
        </Box>
      ))}
    </GridTemplate>
  );
};

export default ProductsGrid;
