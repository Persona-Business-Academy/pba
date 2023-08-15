import { NextApiRequest } from 'next';
import bcrypt from 'bcrypt';
import { getToken } from 'next-auth/jwt';
import { ERROR_MESSAGES } from '@/utils/constants';
import { findUser } from '../resolvers';

export const validateUserPassword = async (email: string, password: string) => {
  try {
    const user = await findUser(email);
    if (!user) {
      throw new Error(ERROR_MESSAGES.invalidCredentials);
    }

    const isValid = await bcrypt.compare(password, user.password || '');
    if (!isValid) {
      throw new Error(ERROR_MESSAGES.invalidCredentials);
    }

    return { id: user.id.toString(), email: user.email };
  } catch (e) {
    throw new Error(e as string);
  }
};

export const validateJwt = async (req: NextApiRequest) => {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  return !!token;
};
