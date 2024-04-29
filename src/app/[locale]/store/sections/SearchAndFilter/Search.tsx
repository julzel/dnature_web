import { Input } from '@chakra-ui/react';

type SearchInputProps = {
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ onSearchChange }: SearchInputProps) => {
  return (
    <div>
      <Input
        name='search'
        type='text'
        placeholder='Search'
        onChange={onSearchChange}
      />
    </div>
  );
};

export default Search;
