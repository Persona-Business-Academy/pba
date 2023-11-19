import { NextApiRequest } from 'next';
import { getToken } from 'next-auth/jwt';

export const validateTokenPayload = async (req: NextApiRequest) => {
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  return token;
};
