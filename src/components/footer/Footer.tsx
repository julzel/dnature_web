'use client';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Logo from '@/components/Logo';

const Footer = () => {
  const date = new Date().getFullYear();
  const logoVariant = useColorModeValue('black', 'white');
  return (
    <Flex
      bg={'orange.500'}
      as='footer'
      align='center'
      justify='center'
      w='full'
      p={[8]}
    >
      <Box>
        <Flex justify='center' mb={2}>
          <Logo variant={logoVariant} size='sm' />
        </Flex>
        <Text textAlign='center' fontSize='xs'>
          © {date} - Todos los derecho reservados.
        </Text>
        <Text textAlign='center' fontSize='xs'>
          Tibás, Costa Rica.
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
