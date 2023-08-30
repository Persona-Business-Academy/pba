import { AuthBox } from '@/components/molecule';
import { FORGOT_PASSWORD_ROUTE } from '@/constants/routes';
import EmailStep from './steps/EmailStep';

export default function ForgotPasswrodPage() {
  return (
    <AuthBox
      data={[
        {
          href: FORGOT_PASSWORD_ROUTE,
          title: 'Forgot Password?',
        },
      ]}
      boxProps={{ marginTop: { '2xl': 210, xl: 160 } }}>
      <EmailStep />
    </AuthBox>
  );
}
