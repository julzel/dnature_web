// import { Box } from '@chakra-ui/react';
// import { PiShoppingCartSimple, PiShoppingCartSimpleFill } from 'react-icons/pi';

// type ShoppingCartProps = {
//   items?: number;
// };

// const ShoppingCartIcon: React.FC<ShoppingCartProps> = ({ items = 0 }) => {
//   if (items === 0) {
//     return <PiShoppingCartSimple />;
//   }
//   return (
//     <Box position='relative'>
//       <PiShoppingCartSimpleFill />
//     </Box>
//   );
// };

// export default ShoppingCartIcon;
import { Box, Center } from '@chakra-ui/react';
import { PiShoppingCartSimple, PiShoppingCartSimpleFill } from 'react-icons/pi';

type ShoppingCartProps = {
  items?: number;
};

const ShoppingCartIcon: React.FC<ShoppingCartProps> = ({ items = 0 }) => {
  return (
    <Box position="relative">
      {items === 0 ? <PiShoppingCartSimple /> : <PiShoppingCartSimpleFill />}
      {items > 0 && (
        <Center
        textAlign={'center'}
          width={'13px'}
          height={'13px'}
          position="absolute"
          top="0"
          right="0"
          color="white"
          bg="orange.500"
          borderRadius="full"
          sx={{
            fontSize: '10px',
            transform: 'translate(50%, -33.3%)',
          }}
        >
          {items}
        </Center>
      )}
    </Box>
  );
};

export default ShoppingCartIcon;
