import { Input } from '@chakra-ui/react';
import styles from './SearchAndFilter.module.scss';

type SearchInputProps = {
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
};

const Search = ({ onSearchChange, searchValue }: SearchInputProps) => {
  return (
    <div className={styles.search}>
      <Input
        name='search'
        type='text'
        placeholder='Search'
        onChange={onSearchChange}
        value={searchValue}
      />
    </div>
  );
};

export default Search;
