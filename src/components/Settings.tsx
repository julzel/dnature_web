import DropdownMenu from '@/components/DropdownMenu';
import SettingsIcon from '@/components/icons/SettingsIcon';
import DarkModeSwitch from '@/components/switches/DarkModeSwitch';
import LocaleSwitcher from '@/components/switches/LocaleSwitcher';

const HeaderSettings = () => {
  const customComponents = [
    <DarkModeSwitch key="dark-mode-switch" />,
    <LocaleSwitcher key="locale-switcher-select" />
  ];

  return (
    <DropdownMenu 
      items={[]}
      customComponents={customComponents}
    >
      <SettingsIcon />
    </DropdownMenu>
  );
};

export default HeaderSettings;
