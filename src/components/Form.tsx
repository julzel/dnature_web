import { useForm } from 'react-hook-form';
import Button from '@/components/Button';
import Input from '@/components/Input';

type FormInput = {
  label: string;
  name: string;
  placeholder: string;
  validationRules: any;
};

type FormProps = {
  inputs: FormInput[];
  onSubmit: (values: any) => void | Promise<void>;
};

const Form: React.FC<FormProps> = ({ inputs, onSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((input, index) => (
        <Input
          key={index}
          label={input.label}
          name={input.name}
          placeholder={input.placeholder}
          validationRules={input.validationRules}
          register={register}
          errors={errors}
        />
      ))}
      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    </form>
  );
};

export default Form;
