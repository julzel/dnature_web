'use client';
import { Box } from '@chakra-ui/react';
import { useCart } from '@/hooks/useCart';
import Settings from '@/components/Settings';
import ShoppingCartIcon from '@/components/icons/ShoppingCartIcon';

const HeaderSubmenu = () => {
  const { totalItems } = useCart();
  return (
    <>
      <ShoppingCartIcon items={totalItems}  />
      <Box mx={2} />
      <Settings />
    </>
  );
};

export default HeaderSubmenu;
