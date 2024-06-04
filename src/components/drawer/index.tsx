import { ReactNode } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerProps,
} from '@chakra-ui/react';

type Direction = 'left' | 'right' | 'top' | 'bottom';

interface CustomDrawerProps extends DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  direction?: Direction;
}

const CustomDrawer: React.FC<CustomDrawerProps> = ({
  children,
  direction = 'left',
  isOpen,
  onClose,
  title,
}) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement={direction}
      onClose={onClose}
      size={{ base: 'full', md: 'xs' }} // Responsive size
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        {title && (
          <DrawerHeader
            sx={{ borderBottom: '1px solid', borderColor: 'gray.200' }}
          >
            {title}
          </DrawerHeader>
        )}
        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
