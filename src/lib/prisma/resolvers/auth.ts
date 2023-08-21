import bcrypt from 'bcrypt';
import { BadRequestException } from 'next-api-decorators';
import { ERROR_MESSAGES } from '@/utils/constants';
import prisma from '..';
import { SignUpValidation } from '../../../validation';

export const signUp = async ({ firstName, lastName, email, password }: SignUpValidation) => {
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!!existingUser) {
    throw new BadRequestException(ERROR_MESSAGES.userAlreadyExists);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    },
  });

  return user;
};
