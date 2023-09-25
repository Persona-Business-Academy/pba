import {
  ForgotPasswordStep1Validation,
  ForgotPasswordStep2Validation,
  ForgotPasswordStep3Validation,
  SignUpValidation,
} from '@/validation';
import $apiClient from '..';

export class AuthService {
  static async signUp(data: SignUpValidation) {
    return await $apiClient.post('/custom-auth/signup', data);
  }
  // forgot password
  static async forgotPasswordStep1(data: ForgotPasswordStep1Validation) {
    return await $apiClient.post('/custom-auth/forgot-password-first-step', data);
  }
  static async forgotPasswordStep2(data: ForgotPasswordStep2Validation) {
    return await $apiClient.post('/custom-auth/forgot-password-second-step', data);
  }
  static async forgotPasswordStep3(data: ForgotPasswordStep3Validation) {
    // this is only example for serverside calls
    // _______________________________________________________________
    // const session = await getServerSession(authOptions);
    return await $apiClient.post(
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
