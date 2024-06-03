import Link from 'next/link';
import { PiPawPrint } from 'react-icons/pi';
import Logo from '@/components/Logo';
import headerStyles from '../Header.module.scss';

const MainHeader = () => {
  return (
    <header className={headerStyles.header}>
      <Link href='/' className={headerStyles.headerLogo}>
        <Logo variant='color' />
      </Link>
      <button className={headerStyles.menuButton}>
        <PiPawPrint />
      </button>
    </header>
  );
};

export default MainHeader;
