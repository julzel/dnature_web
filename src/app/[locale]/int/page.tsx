'use client';
import { useDisclosure } from '@chakra-ui/react';
import Button from '@/components/Button';
import Modal from '@/components/Modal';

interface InternalProps {
  // Add any props you need for the Internal component
}

const Internal: React.FC<InternalProps> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Add your component logic here

  return (
    <div>
      {/* Add your component JSX here */}
      <h1>Internal Page</h1>
      <p>This is the internal page content.</p>
      <div>
        <Button label='Primary' onClick={() => console.log('Clicked!')} />
        <Button
          label='Disabled'
          onClick={() => console.log('Clicked!')}
          disabled
        />
        <Button
          label='Secondary'
          color='secondary'
          onClick={() => console.log('Clicked!')}
        />
        <Button
          label='Outline'
          variant='outline'
          onClick={() => console.log('Clicked!')}
        />
        <Button
          label='Outline'
          color='secondary'
          variant='outline'
          onClick={() => console.log('Clicked!')}
        />
        <Button
          label='Ghost'
          color='secondary'
          variant='ghost'
          onClick={() => console.log('Clicked!')}
        />
        <Button
          label='Link'
          variant='link'
          onClick={() => console.log('Clicked!')}
        />
      </div>
      <div>
        <Button onClick={onOpen}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <p>Modal Content</p>
        </Modal>
      </div>
    </div>
  );
};

export default Internal;