'use client'
import { useColorMode, Switch } from '@chakra-ui/react';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
  );
};

export default DarkModeSwitch;
