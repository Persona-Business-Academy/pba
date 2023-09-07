import { AuthBox } from '@/components/molecule';
import { SIGN_IN_ROUTE, SIGN_UP_ROUTE } from '@/constants/routes';
import SignIn from './SignIn';

export default function SignInPage() {
  return (
    <AuthBox
      data={[
        {
          href: SIGN_UP_ROUTE,
          title: 'Sign up',
        },
        {
          href: SIGN_IN_ROUTE,
          title: 'Sign In',
        },
      ]}
      boxProps={{ marginTop: 42 }}>
      <SignIn />
    </AuthBox>
  );
}
