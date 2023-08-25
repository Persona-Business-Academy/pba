import { NextApiRequest } from 'next';
import bcrypt from 'bcrypt';
import { BadRequestException } from 'next-api-decorators';
import { getToken } from 'next-auth/jwt';
import { ERROR_MESSAGES } from '@/utils/constants';
import { findUser } from '../resolvers';

export const validateUserPassword = async (email: string, password: string) => {
  try {
    const user = await findUser(email);

    if (!user) {
      throw new BadRequestException(ERROR_MESSAGES.invalidCredentials);
    }

    const isValid = await bcrypt.compare(password, user.password || '');
    if (!isValid) {
      throw new BadRequestException(ERROR_MESSAGES.invalidCredentials);
    }

    return { id: user.id, email: user.email };
  } catch (e) {
    throw new Error(e as string);
  }
};

export const validateJwt = async (req: NextApiRequest) => {
  try {
    const token = await getToken({ req, secret: process.env.JWT_SECRET });
    return !!token;
  } catch {
    return false;
  }
};
