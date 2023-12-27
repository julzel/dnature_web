import LocaleSwitcher from '@/components/LocaleSwitcher';
import DarkModeSwitch from '@/components/DarkModeSwitch';

const Header = () => {
  return (
    <header>
      <LocaleSwitcher />
      <DarkModeSwitch />
    </header>
  );
};

export default Header;
