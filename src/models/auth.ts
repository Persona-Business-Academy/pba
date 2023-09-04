export interface SignInFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface ForgotPasswordStep1Data {
  email: string;
}

export interface ForgotPasswordStep2Data {
  userId: string;
  otpPassword: string;
}

export interface ForgotPasswordStep3Data {
  userId: string;
  newPassword: string;
  confirmPassword: string;
}

export type ForgotPasswordStep = 'emailStep' | 'OTPStep' | 'passwordStep';
