'use client';
import React, { createContext, FC, useContext, useState } from 'react';
import { ForgotPasswordStep } from '@/models/auth';

interface AuthState {
  step: ForgotPasswordStep;
  setStep: React.Dispatch<React.SetStateAction<ForgotPasswordStep>>;
  forgotPasswordUserId?: number;
  setForgotPasswordUserId: React.Dispatch<React.SetStateAction<number | undefined>>;
}

interface Props {
  children?: React.ReactNode;
}

const AuthContext = createContext<AuthState>({} as AuthState);

export const AuthProvider: FC<Props> = ({ children }) => {
  const [step, setStep] = useState<ForgotPasswordStep>('emailStep');
  const [forgotPasswordUserId, setForgotPasswordUserId] = useState<number>();

  return (
    <AuthContext.Provider
      value={{
        step,
        setStep,
        forgotPasswordUserId,
        setForgotPasswordUserId,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
