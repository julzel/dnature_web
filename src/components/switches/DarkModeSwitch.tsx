'use client';
import {
  Flex,
  useColorMode,
  Switch,
  Box,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { PiSun, PiMoonStarsLight } from 'react-icons/pi';
import StringTranslator from '@/components/StringTraslator';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const itemColor = useColorModeValue('black', 'white');

  return (
    <Flex
      alignItems='center'
      justifyContent='space-between'
      w='100%'
      color={itemColor}
    >
      <Text fontSize='sm' mr={2}>
        <StringTranslator sectionKey='DarkModeSwitcher' textKey='label' />
      </Text>
      <Flex alignItems='center' onClick={(e) => e.stopPropagation()}>
        <Box as={PiMoonStarsLight} mr={2} />
        <Switch isChecked={colorMode === 'light'} onChange={toggleColorMode} />
        <Box as={PiSun} ml={2} />
      </Flex>
    </Flex>
  );
};

export default DarkModeSwitch;
