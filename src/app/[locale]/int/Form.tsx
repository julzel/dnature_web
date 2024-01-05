import Form from '@/components/Form';

type formValues = {
  name: string;
};

const formInputs = [
  {
    label: 'Name',
    name: 'name',
    placeholder: 'Enter your name',
    validationRules: {
      required: 'Name is required',
      minLength: { value: 4, message: 'Minimum length should be 4' },
    },
  },
  {
    label: 'Email',
    name: 'email',
    placeholder: 'Enter your email',
    validationRules: {
      required: 'Email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email address',
      },
    },
  },
  {
    label: 'Phone',
    name: 'phone',
    placeholder: 'Enter your phone number',
    validationRules: {
      required: 'Phone number is required',
      pattern: {
        value: /^[0-9]+$/,
        message: 'Invalid phone number, only digits allowed',
      },
      minLength: {
        value: 10,
        message: 'Phone number must be at least 10 digits long',
      },
      maxLength: {
        value: 15,
        message: 'Phone number must be less than 15 digits long',
      },
    },
  },
  {
    label: 'Remember Me',
    name: 'rememberMe',
    type: 'checkbox',
  },
];

const FormExample = () => {
  const onSubmit = (values: formValues) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 1000);
    });
  };
  return (
    <>
      <Form inputs={formInputs} onSubmit={onSubmit} />
    </>
  );
};

export default FormExample;
