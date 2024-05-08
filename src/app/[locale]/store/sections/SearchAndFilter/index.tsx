import Search from './Search';
import Filter from './Filter';
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
    <div className={styles.searchAndFilter}>
      <Search onSearchChange={onSearchChange} searchValue={searchValue} />
      <Filter />
    </div>
  );
};

export default SearchAndFilter;
