import { Box, Flex, useDisclosure } from '@chakra-ui/react';
import Search from '@/components/search';
import FilterButton from '@/components/filter-button';
import Drawer from '@/components/drawer';
import styles from './SearchAndFilter.module.scss';
import FilterOptions from './FilterOptions';

type SerchAndFilterProps = {
  categories: string[];
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
};

const SearchAndFilter = ({
  onSearchChange,
  searchValue,
  categories,
  selectedCategory,
  setSelectedCategory,
}: SerchAndFilterProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box backgroundColor='cyan.50' className={styles.searchAndFilterContainer}>
      <Flex
        justifyContent='space-between'
        className={styles.searchAndFilter}
        p={4}
      >
        <Search onSearchChange={onSearchChange} searchValue={searchValue} />
        <FilterButton onClick={onOpen} />
      </Flex>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        direction='right'
        title='Filtrar'
      >
        <FilterOptions
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Drawer>
    </Box>
  );
};

export default SearchAndFilter;
