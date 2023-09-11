import { AuthBox } from '@/components/molecule';
import { SIGN_IN_ROUTE, SIGN_UP_ROUTE } from '@/constants/routes';
import SignUp from './SignUp';

export default function SignUpPage() {
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
      boxProps={{ marginTop: { base: 64, md: 37 } }}>
      <SignUp />
    </AuthBox>
  );
}
