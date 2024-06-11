"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import { useDebouncedCallback } from "use-debounce";
import Search from "@/components/search";
import FilterButton from "@/components/filter-button";
import Drawer from "@/components/drawer";
import styles from "./SearchAndFilter.module.scss";
import FilterOptions from "./FilterOptions";

type SerchAndFilterProps = {
  category?: string;
  categories: string[];
};

const SearchAndFilter = ({ category, categories }: SerchAndFilterProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace, push } = useRouter();

  const handleSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const term = e.target.value;
      const params = new URLSearchParams(searchParams);
      if (term) {
        params.set("query", term);
      } else {
        params.delete("query");
      }
      replace(`${pathname}?${params.toString()}`);
    }
  );

  const handleCategoryFilter = (value: string) =>
    value === "Todos" // ALL_CATEGORIES
      ? push("/store")
      : push(`/store?category=${value}`);

  return (
    <Box backgroundColor="cyan.50" className={styles.searchAndFilterContainer}>
      <Flex
        justifyContent="space-between"
        className={styles.searchAndFilter}
        p={4}
      >
        <Search
          searchValue={searchParams.get("query")?.toString() || ""}
          onSearchChange={handleSearch}
        />
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
          selectedCategory={category ? category : "Todos"}
          setSelectedCategory={handleCategoryFilter}
        />
      </Drawer>
    </Box>
  );
};

export default SearchAndFilter;
