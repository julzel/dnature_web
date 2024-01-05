import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

// Extending the ChakraButtonProps type
type ButtonProps = ChakraButtonProps & {
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  children,
  ...rest
}) => {

  return (
    <ChakraButton
      {...rest} // Spread the rest of the props here
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
