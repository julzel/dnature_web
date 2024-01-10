'use client';
import NextLink from 'next/link';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from '@chakra-ui/react';
import { IDropdownItem } from '@/types';

type DropdownMenuProps = {
  items: IDropdownItem[];
  children?: React.ReactNode;
  customComponents?: React.ReactNode[];
};


const DropdownMenu: React.FC<DropdownMenuProps> = ({
  items,
  children,
  customComponents,
}) => {
  const itemColor = useColorModeValue('black', 'white');
  const menuBgColor = useColorModeValue('white', 'cyan.900');

  const renderItem = (item: IDropdownItem, index: number) => {
    if ('path' in item) {
      return (
        <MenuItem
          color={itemColor}
          bg={menuBgColor}
          as={NextLink}
          href={item.path}
          key={index}
          passHref
        >
          {item.label}
        </MenuItem>
      );
    }
    if ('onClick' in item) {
      return (
        <MenuItem key={index} onClick={item.onClick} color={itemColor}>
          {item.label}
        </MenuItem>
      );  
    }
    return null;
  };

  return (
    <Menu>
      <MenuButton>{children ? children : 'Menu'}</MenuButton>
      <MenuList bg={menuBgColor}>
        {items.map((item, index) => renderItem(item, index))}
        {customComponents && customComponents.map((component, index) => (
          <MenuItem key={`custom-${index}`}>
            {component}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu;
