"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import Search from "@/components/search";
import FilterButton from "@/components/filter-button";
import Drawer from "@/components/drawer";
import styles from "./SearchAndFilter.module.scss";
import FilterOptions from "./FilterOptions";

type SerchAndFilterProps = {
  categories: string[];
};

const SearchAndFilter = ({ categories }: SerchAndFilterProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const handleCategoryChange = (value: string) =>
    value === categories[0] // ALL_CATEGORIES
      ? router.push("/store")
      : router.push(`/store?category=${value}`);

  return (
    <Box backgroundColor="cyan.50" className={styles.searchAndFilterContainer}>
      <Flex
        justifyContent="space-between"
        className={styles.searchAndFilter}
        p={4}
      >
        {/* <Search onSearchChange={onSearchChange} searchValue={searchValue} /> */}
        <FilterButton onClick={onOpen} />
      </Flex>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        direction="right"
        title="Filtrar"
      >
        <FilterOptions
          categories={categories}
          selectedCategory={category ? category : categories[0]}
          setSelectedCategory={handleCategoryChange}
        />
      </Drawer>
    </Box>
  );
};

export default SearchAndFilter;
