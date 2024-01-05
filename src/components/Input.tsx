import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  useColorModeValue,
} from '@chakra-ui/react';

type CustomInputProps = {
  name: string;
  label?: string;
  placeholder: string;
  validationRules: any;
  register?: any;
  errors?: any;
};

const CustomInput = ({
  name,
  label,
  placeholder,
  validationRules,
  register,
  errors,
}: CustomInputProps) => {
    const focusBorderColor = useColorModeValue('cyan.500', 'cyan.300');

  return (
    <FormControl mb={[4, 8]} isInvalid={!!errors[name]}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Input
        focusBorderColor={focusBorderColor}
        id={name}
        placeholder={placeholder}
        {...register(name, validationRules)}
      />
      <FormErrorMessage>
        {errors[name] && `${errors[name]?.message}`}
      </FormErrorMessage>
    </FormControl>
  );
};

export default CustomInput;
