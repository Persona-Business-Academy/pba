import {
  ForgotPasswordStep1Validation,
  ForgotPasswordStep2Validation,
  ForgotPasswordStep3Validation,
  SignUpValidation,
} from '@/utils/validation';
import $apiClient from '..';

export class AuthService {
  static signUp(data: SignUpValidation) {
    return $apiClient.post('/custom-auth/signup', data);
  }
  // forgot password
  static forgotPasswordStep1(data: ForgotPasswordStep1Validation) {
    return $apiClient.post('/custom-auth/forgot-password-first-step', data);
  }
  static forgotPasswordStep2(data: ForgotPasswordStep2Validation) {
    return $apiClient.post('/custom-auth/forgot-password-second-step', data);
  }

  static forgotPasswordStep3(data: ForgotPasswordStep3Validation) {
    // this is only example for serverside calls
    // _______________________________________________________________
    //  const session = await serverSession()
    return $apiClient.post(
      '/custom-auth/forgot-password-third-step',
      data,
      // {
      //   headers: {
      //     Authorization: `Bearer ${session?.user.token}`,
      //     'Content-Type': 'application/json',
      //   },
      // },
    );
  }
}
