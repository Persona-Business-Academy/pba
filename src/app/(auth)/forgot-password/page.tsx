'use client';
import { useMemo } from 'react';
import { StackProps } from '@chakra-ui/react';
import { AuthBox } from '@/components/molecule';
import { FORGOT_PASSWORD_ROUTE } from '@/constants/routes';
import { useAuth } from '@/contexts/AuthContext';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';

export default function ForgotPasswrodPage() {
  const { step } = useAuth();

  const Step = useMemo(() => {
    switch (step) {
      case 'emailStep':
        return <Step1 />;
      case 'OTPStep':
        return <Step2 />;
      case 'passwordStep':
        return <Step3 />;
      default:
        return null;
    }
  }, [step]);

  const authBoxData = useMemo(() => {
    switch (step) {
      case 'emailStep':
        return {
          href: FORGOT_PASSWORD_ROUTE,
          title: 'Forgot Password?',
        };
      case 'OTPStep':
        return {
          href: FORGOT_PASSWORD_ROUTE,
          title: 'Check your email',
        };
      case 'passwordStep':
        return {
          href: FORGOT_PASSWORD_ROUTE,
          title: 'Create new password',
        };
    }
  }, [step]);

  const linkProps: StackProps = useMemo(() => {
    switch (step) {
      case 'OTPStep':
        return { display: 'flex', justifyContent: 'center' };
      default:
        return {};
    }
  }, [step]);

  return (
    <AuthBox
      data={[authBoxData]}
      boxProps={{ marginTop: { base: 64, md: 160, '2xl': 210 } }}
      linkProps={linkProps}>
      {Step}
    </AuthBox>
  );
}
