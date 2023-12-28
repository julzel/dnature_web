import { Box } from '@chakra-ui/react';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import DarkModeSwitch from '@/components/DarkModeSwitch';

const Header = () => {
  return (
    <header>
      <Box
        bg='cyan.900'
        color='cyan.900'
        px={[4, 8]}
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        w='100%'
      >
        <LocaleSwitcher />
        <DarkModeSwitch />
      </Box>
    </header>
  );
};

export default Header;
