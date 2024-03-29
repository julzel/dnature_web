'use client';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import Logo from '@/components/Logo';

const Footer = () => {
  const date = new Date().getFullYear();
  const logoVariant = useColorModeValue('black', 'white');
  return (
    <Flex
      bg={'orange.600'}
      as='footer'
      align='center'
      justify='center'
      w='full'
      p={[2, 4]}
    >
      <Box>
        <Flex justify='center' mb={2}>
          <Logo variant={logoVariant} />
        </Flex>
        <Text textAlign='center' fontSize='sm'>
          © {date} - Todos los derecho reservados.
        </Text>
        <Text textAlign='center' fontSize='sm'>
          Tibás, Costa Rica.
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
