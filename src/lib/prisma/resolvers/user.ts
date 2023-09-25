import prisma from '../index';

export const findUserWithEmail = async (email: string) =>
  await prisma.user.findUnique({ where: { email } });
