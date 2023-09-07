import {
  ForgotPasswordStep1Data,
  ForgotPasswordStep2Data,
  ForgotPasswordStep3Data,
  SignUpFormData,
} from '@/models/auth';
import $apiClient from '..';

export class AuthService {
  static async signUp(data: SignUpFormData) {
    return await $apiClient.post('/custom-auth/signup', data);
  }
  // forgot password
  static async forgotPasswordStep1(data: ForgotPasswordStep1Data) {
    return await $apiClient.post('/custom-auth/forgot-password-first-step', data);
  }
  static async forgotPasswordStep2(data: ForgotPasswordStep2Data) {
    return await $apiClient.post('/custom-auth/forgot-password-second-step', data);
  }
  static async forgotPasswordStep3(data: ForgotPasswordStep3Data) {
    return await $apiClient.post('/custom-auth/forgot-password-third-step', data);
  }
}
