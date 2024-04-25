import Link from 'next/link';
import { CiMenuBurger } from 'react-icons/ci';
import Logo from '@/components/Logo';
import headerStyles from '../Header.module.scss';

const MainHeader = () => {
  return (
    <header className={headerStyles.header}>
      <Link href='/' className={headerStyles.headerLogo}>
        <Logo variant='color' />
      </Link>
      <button className={headerStyles.menuButton}>
        <CiMenuBurger />
      </button>
    </header>
  );
};

export default MainHeader;
