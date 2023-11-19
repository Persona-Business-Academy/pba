import prisma from '../index';

export const findUserWithEmail = (email: string) =>
  prisma.user.findUnique({
    where: { email },
  });
