import { Box, Radio, RadioGroup, VStack } from '@chakra-ui/react';
import Title from '@/components/Titles';

type Props = {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
};

const FilterOptions = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: Props) => {
  return (
    <Box py={[4, 8]}>
      <Title type='caption' pb={[4, 8]}>
        Filtrar por categoría
      </Title>
      <RadioGroup onChange={setSelectedCategory} value={selectedCategory}>
        <VStack align='start' pl={[2, 4]}>
          {categories.map((category) => (
            <Radio
              key={category}
              value={category}
              checked={selectedCategory === category}
            >
              {category}
            </Radio>
          ))}
        </VStack>
      </RadioGroup>
    </Box>
  );
};

export default FilterOptions;
