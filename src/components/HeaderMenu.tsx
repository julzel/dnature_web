'use client';
import { useMediaQuery } from '@chakra-ui/react';
import DropdownMenu from '@/components/DropdownMenu';
import MenuIcon from '@/components/icons/MenuIcon';
import HeaderNav from '@/components/HeaderNav';
import HeaderNavigationItems from '@/hooks/useHeaderTranslation';
import { INavLink } from '@/types';

const HeaderMenu: React.FC = () => {
  const [isLargeScreen] = useMediaQuery('(min-width: 601px)');
  const navLinks: INavLink[] = HeaderNavigationItems();

  if (isLargeScreen) {
    return <HeaderNav navLinks={navLinks} />;
  }

  return (
    <DropdownMenu items={navLinks}>
      <MenuIcon />
    </DropdownMenu>
  );
};

export default HeaderMenu;
