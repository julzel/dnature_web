'use client';
import { Button as ChakraButton, useColorModeValue } from '@chakra-ui/react';

type ButtonProps = {
  onClick: () => void;
  label?: string;
  color?: 'primary' | 'secondary';
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
  disabled?: boolean;
  children?: React.ReactNode;
};

const colorMap = {
  primary: 'cyan',
  secondary: 'orange'
};

const Button: React.FC<ButtonProps> = ({ onClick, label, color = 'primary', variant, disabled, children }) => {
  const bgColor = useColorModeValue(`${colorMap[color]}.500`, `${colorMap[color]}.500`);
  const hoverBgColor = useColorModeValue(`${colorMap[color]}.600`, `${colorMap[color]}.300`);
  const textColor = useColorModeValue('white', 'gray.800');
  const disabledBgColor = useColorModeValue('gray.200', 'gray.600');
  const disabledTextColor = useColorModeValue('gray.400', 'gray.500');

  if (variant && variant !== 'solid') {
    return (
      <ChakraButton
        variant={variant}
        colorScheme={colorMap[color]}
        _disabled={{
          backgroundColor: disabledBgColor,
          color: disabledTextColor,
          cursor: 'not-allowed',
          opacity: 0.6
        }}
        onClick={onClick}
        isDisabled={disabled}
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
        opacity: 0.6
      }}
      onClick={onClick}
      isDisabled={disabled}
    >
      {label ? label : children}
    </ChakraButton>
  );
};

export default Button;
