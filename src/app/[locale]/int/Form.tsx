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
}
 
export default FormExample;