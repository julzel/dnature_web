import SignUpForm from '@/components/sign-up';
import styles from './page.module.scss';

type Props = {};

const SignUp = (props: Props) => {
  return (
    <div className={styles.signup}>
      <SignUpForm />
    </div>
  );
};

export default SignUp;
