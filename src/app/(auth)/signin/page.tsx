import { AuthBox } from '@/components/molecule';
import { AuthPages } from '@/enums/components';
import SignIn from './SignIn';

export default function SignInPage() {
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
      <SignIn />
    </AuthBox>
  );
}
