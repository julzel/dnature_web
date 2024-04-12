import { Box, Flex, Divider } from '@chakra-ui/react';
import Logo from '@/components/Logo';
import HeaderMenu from '@/components/header_old/HeaderMenu';
import HeaderSubmenu from '@/components/header_old/HeaderSubmenu';

const Header = () => {
  return (
    <header>
      <Flex
        bg='cyan.900'
        color='white'
        px={[4, 8]}
        py={2}
        pb={1}
        justifyContent='space-between'
        alignItems='center'
        w='100%'
        height='60px'
      >
        <Logo variant='color' />
        <Flex alignItems='center'>
          <HeaderSubmenu />
          <Box height={6} mx={4}>
            <Divider orientation='vertical' />
          </Box>
          <HeaderMenu />
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
