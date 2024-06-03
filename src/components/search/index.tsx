import { Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { PiMagnifyingGlass } from 'react-icons/pi';
import styles from './Search.module.scss';

type SearchInputProps = {
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
  placeholder?: string;
};

const Search = ({
  onSearchChange,
  searchValue,
  placeholder,
}: SearchInputProps) => {
  return (
    <div className={styles.search}>
      <InputGroup>
        <Input
          name='search'
          type='text'
          placeholder={placeholder || 'Buscar'}
          onChange={onSearchChange}
          value={searchValue}
        />
        <InputRightElement pointerEvents='none'>
          <PiMagnifyingGlass color='gray' />
        </InputRightElement>
      </InputGroup>
    </div>
  );
};

export default Search;
