"use client";
import { useSearchParams } from "next/navigation";
import ProductsList from "./ProductsList";
import SearchAndFilter from "./SearchAndFilter";

type Props = {
  categories: string[];
};

const Store = ({ categories }: Props) => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";
  return (
    <div>
      <SearchAndFilter
        categories={categories}
        // onSearchChange={handleOnSearch}
        // searchValue={searchValue}
      />
      <ProductsList category={category} />
    </div>
  );
};

export default Store;
