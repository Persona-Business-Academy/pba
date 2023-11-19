export interface SignInFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export type ForgotPasswordStep = 'emailStep' | 'OTPStep' | 'passwordStep';

export interface UserProfileFormData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  city: string;
  address: string;
  country: string;
  state: string;
}
