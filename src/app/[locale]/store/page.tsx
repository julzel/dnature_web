import { Suspense } from "react";
import ProductsList from "./components/ProductsList";
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
    <div className={styles.store}>
      <SearchAndFilter category={category} categories={categories} />
      <Suspense
        key={query + category}
        fallback={<div>Loading Fallback...</div>}
      >
        <ProductsList query={query} category={category} />
      </Suspense>
    </div>
  );
};

export default Store;
