import { useForm } from 'react-hook-form';
import Button from '@/components/Button';
import Input from '@/components/form/Input';
import Checkbox from '@/components/form/Checkbox';

type FormInput = {
  label: string;
  name: string;
  placeholder: string;
  validationRules: any;
  type?: string;
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
      {inputs.map((input, index) =>
        input.type === 'checkbox' ? (
          <Checkbox
            key={index}
            name={input.name}
            label={input.label}
            register={register}
            errors={errors}
          />
        ) : (
          <Input
            key={index}
            label={input.label}
            name={input.name}
            placeholder={input.placeholder}
            validationRules={input.validationRules}
            register={register}
            errors={errors}
          />
        )
      )}
      <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
    </form>
  );
};

export default Form;
