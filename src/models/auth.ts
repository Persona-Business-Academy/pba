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
  userId: number;
  otpPassword: string;
}

export interface ForgotPasswordStep3Data {
  userId: number;
  newPassword: string;
  confirmPassword: string;
}

export type ForgotPasswordStep = 'emailStep' | 'OTPStep' | 'passwordStep';
