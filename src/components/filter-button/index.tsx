import { Button } from '@chakra-ui/react';
import { PiSortAscendingThin } from 'react-icons/pi';

type Props = {
  onClick: () => void;
};

const FilterButton = ({ onClick }: Props) => {
  return (
    <Button
      p={0}
      m={0}
      onClick={onClick}
      leftIcon={<PiSortAscendingThin />}
      fontSize='40px'
      color='gray.500'
      variant='ghost'
      aria-label='Filtrar y ordenar productos'
      iconSpacing={0}
    />
  );
};

export default FilterButton;
