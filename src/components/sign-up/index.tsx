'use client';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { gql, useMutation } from '@apollo/client';

const SIGN_UP_MUTATION = gql`
  mutation SignUp($signUpInput: SignUpInput!) {
    signUp(signUpInput: $signUpInput) {
      id
      username
      email
    }
  }
`;

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

type SignUpFormData = {
  username: string;
  email: string;
  password: string;
};

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(schema),
  });

  const [signUp, { loading, error }] = useMutation(SIGN_UP_MUTATION);

  const onSubmit = async (data: SignUpFormData) => {
    try {
      const response = await signUp({
        variables: {
          signUpInput: data,
        },
      });
      console.log('Sign-Up Successful:', response.data);
    } catch (err) {
      console.error('Error during sign-up:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username</label>
        <input {...register('username')} />
        <p>{errors.username?.message}</p>
      </div>
      <div>
        <label>Email</label>
        <input {...register('email')} />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label>Password</label>
        <input type='password' {...register('password')} />
        <p>{errors.password?.message}</p>
      </div>
      <button type='submit' disabled={loading}>
        Sign Up
      </button>
      {error && <p>Error during sign-up: {error.message}</p>}
    </form>
  );
};

export default SignUp;
