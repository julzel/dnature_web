import { Flex } from '@chakra-ui/react';
import { PiSortAscendingThin } from 'react-icons/pi';
import styles from './Filter.module.scss';

type Props = {};

const Filter = (props: Props) => {
  return (
    <Flex className={styles.filter} alignItems='center' color='gray.500'>
      <PiSortAscendingThin />
    </Flex>
  );
};

export default Filter;
