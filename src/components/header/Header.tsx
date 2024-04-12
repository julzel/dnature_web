import { CiMenuBurger } from 'react-icons/ci';
import Logo from '@/components/Logo';
import HeaderMotion from './HeaderMotion';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <HeaderMotion className={styles.header}>
      <Logo variant='color' />
      <button className={styles.menuButton}>
        <CiMenuBurger />
      </button>
    </HeaderMotion>
  );
};

export default Header;
