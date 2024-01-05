import {
  FormControl,
  Checkbox,
  FormErrorMessage,
  useColorModeValue,
} from '@chakra-ui/react';

type CustomCheckboxProps = {
  name: string;
  label?: string;
  register?: any;
  errors?: any;
};

const CustomCheckbox = ({
  name,
  label,
  register,
  errors,
}: CustomCheckboxProps) => {

  return (
    <FormControl mb={[4, 8]} isInvalid={!!errors[name]}>
      <Checkbox size={'lg'} id={name} colorScheme='cyan' {...register(name)}>
        {label}
      </Checkbox>
      <FormErrorMessage>
        {errors[name] && `${errors[name]?.message}`}
      </FormErrorMessage>
    </FormControl>
  );
};

export default CustomCheckbox;
