'use client';
import { usePathname } from 'next/navigation';
import HomeHeader from './home-header';
import MainHeader from './main-header';

const Header = () => {
  const pathname = usePathname();
  const isHome = pathname === '/en' || pathname === '/es';

  if (isHome) {
    return <HomeHeader />;
  }
  return <MainHeader />;
};

export default Header;