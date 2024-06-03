import { Box, Flex } from '@chakra-ui/react';
import Search from '../../components/Search';
import Filter from '../../components/Filter';
import styles from './SearchAndFilter.module.scss';

type SerchAndFilterProps = {
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  onFilterChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SearchAndFilter = ({
  onSearchChange,
  searchValue,
}: SerchAndFilterProps) => {
  return (
    <Box backgroundColor='cyan.50' className={styles.searchAndFilterContainer}>
      <Flex justifyContent='space-between' className={styles.searchAndFilter} p={4}>
        <Search onSearchChange={onSearchChange} searchValue={searchValue} />
        <Filter />
      </Flex>
    </Box>
  );
};

export default SearchAndFilter;
