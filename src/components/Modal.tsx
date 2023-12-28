import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import Button from '@/components/Button';

type ModalProps = {
  children?: React.ReactNode;
  withHeader?: boolean;
  headerText?: string;
  isOpen: boolean;
  onClose: () => void;
  secondaryAction?: () => void;
};

const Modal: React.FC<ModalProps> = ({
  children,
  withHeader,
  headerText,
  isOpen,
  onClose,
  secondaryAction,
}) => {
  return (
    <>
      <ChakraModal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {withHeader && <ModalHeader>{headerText}</ModalHeader>}
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
            {secondaryAction && (<Button onClick={secondaryAction} variant='ghost'>
              Secondary Action
            </Button>)}
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  );
};

export default Modal;
