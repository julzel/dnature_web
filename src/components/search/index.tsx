import { Box, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { PiMagnifyingGlass } from "react-icons/pi";

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
    <Box flex={1} mr={4}>
      <InputGroup>
        <Input
          backgroundColor="white"
          name="search"
          type="text"
          placeholder={placeholder || "Buscar"}
          onChange={onSearchChange}
          defaultValue={searchValue}
        />
        <InputRightElement pointerEvents="none">
          <PiMagnifyingGlass color="gray" />
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default Search;
