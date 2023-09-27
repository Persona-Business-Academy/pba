import bcrypt from 'bcrypt';
import { BadRequestException } from 'next-api-decorators';
import { ERROR_MESSAGES } from '@/constants/common';
import { findUserWithEmail } from '../resolvers';

export const validateUserPassword = async (email: string, password: string) => {
  try {
    const user = await findUserWithEmail(email);

    if (!user) {
      throw new BadRequestException(ERROR_MESSAGES.invalidCredentials);
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new BadRequestException(ERROR_MESSAGES.invalidCredentials);
    }

    return user;
  } catch (e) {
    throw new Error(e as string);
  }
};
