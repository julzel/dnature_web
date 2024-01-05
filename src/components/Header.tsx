import { Box } from '@chakra-ui/react';
import Logo from '@/components/Logo';
// import LocaleSwitcher from '@/components/LocaleSwitcher';
// import DarkModeSwitch from '@/components/DarkModeSwitch';

const Header = () => {
  return (
    <header>
      <Box
        bg='cyan.900'
        color='white'
        px={[4, 8]}
        py={2}
        pb={1}
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        w='100%'
      >
        <Logo variant='transparent' />
        {/* <LocaleSwitcher />
        <DarkModeSwitch /> */}
      </Box>
    </header>
  );
};

export default Header;
