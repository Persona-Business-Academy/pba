import { AuthBox } from '@/components/molecule';
import { AuthPages } from '@/enums/components';
import SignUp from './SignUp';

export default function SignUpPage() {
  return (
    <AuthBox
      data={[
        {
          href: AuthPages.SIGN_UP,
          title: 'Sign up',
        },
        {
          href: AuthPages.SIGN_IN,
          title: 'Sign In',
        },
      ]}>
      <SignUp />
    </AuthBox>
  );
}
