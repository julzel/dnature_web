import { Suspense } from "react";
import { Box } from "@chakra-ui/react";
import ProductsList from "./components/ProductList";
import { ProductsGridSkeleton } from "@/components/products-grid";
import Title from "@/components/Titles";
import SearchAndFilter from "./components/SearchAndFilter";
import { getCategories } from "./store";
import styles from "./page.module.scss";

type Props = {
  searchParams?: {
    query?: string;
    category?: string;
  };
};

const Store = async ({ searchParams }: Props) => {
  const query = searchParams?.query || "";
  const category = searchParams?.category || "";
  const categories = await getCategories();

  return (
    <Box className={styles.store} bgColor="gray.50" px={[4, 8]} pb={[4, 8]}>
      <SearchAndFilter category={category} categories={categories} />
      <Suspense key={query + category} fallback={<ProductsGridSkeleton />}>
        <Box>
          {query ? (
            <Title type="subtitle-2">Resultados para &quot;{query}&quot;</Title>
          ) : (
            <Title type="subtitle-2">{category || "Todos los productos"}</Title>
          )}
        </Box>
        <ProductsList query={query} category={category} />
      </Suspense>
    </Box>
  );
};

export default Store;
