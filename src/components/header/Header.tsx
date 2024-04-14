import { CiMenuBurger } from 'react-icons/ci';
import Logo from '@/components/Logo';
import HeaderMotion from './HeaderMotion';
import HeaderLogo from './HeaderLogo';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <HeaderMotion className={styles.header}>
      <HeaderLogo />
      <button className={styles.menuButton}>
        <CiMenuBurger />
      </button>
    </HeaderMotion>
  );
};

export default Header;
