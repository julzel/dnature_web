import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
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

  return (
    <FormControl isInvalid={!!errors[name]}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <Input
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
