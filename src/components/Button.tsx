import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  useColorModeValue,
} from '@chakra-ui/react';

// Extending the ChakraButtonProps type
type ButtonProps = ChakraButtonProps & {
  onClick?: () => void;
  label?: string;
  color?: 'primary' | 'secondary';
  disabled?: boolean;
  children?: React.ReactNode;
};

const colorMap = {
  primary: 'cyan',
  secondary: 'orange',
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  color = 'primary',
  variant,
  disabled,
  children,
  ...rest
}) => {
  const bgColor = useColorModeValue(
    `${colorMap[color as 'primary' | 'secondary']}.500`,
    `${colorMap[color as 'primary' | 'secondary']}.500`
  );
  const hoverBgColor = useColorModeValue(
    `${colorMap[color as 'primary' | 'secondary']}.600`,
    `${colorMap[color as 'primary' | 'secondary']}.300`
  );
  const textColor = useColorModeValue('white', 'gray.800');
  const disabledBgColor = useColorModeValue('gray.200', 'gray.600');
  const disabledTextColor = useColorModeValue('gray.400', 'gray.500');

  if (variant && variant !== 'solid') {
    return (
      <ChakraButton
        variant={variant}
        colorScheme={colorMap[color as 'primary' | 'secondary']}
        _disabled={{
          backgroundColor: disabledBgColor,
          color: disabledTextColor,
          cursor: 'not-allowed',
          opacity: 0.6,
        }}
        onClick={onClick}
        isDisabled={disabled}
        {...rest} // Spread the rest of the props here
      >
        {label ? label : children}
      </ChakraButton>
    );
  }

  return (
    <ChakraButton
      backgroundColor={bgColor}
      color={textColor}
      _hover={{ bg: hoverBgColor }}
      _disabled={{
        backgroundColor: disabledBgColor,
        color: disabledTextColor,
        cursor: 'not-allowed',
        opacity: 0.6,
      }}
      onClick={onClick}
      isDisabled={disabled}
      {...rest} // Spread the rest of the props here
    >
      {label ? label : children}
    </ChakraButton>
  );
};

export default Button;
