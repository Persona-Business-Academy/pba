import bcrypt from 'bcrypt';
import { BadRequestException } from 'next-api-decorators';
import { ERROR_MESSAGES } from '@/constants/common';
import {
  ForgotPasswordStep1Validation,
  ForgotPasswordStep2Validation,
  ForgotPasswordStep3Validation,
  SignUpValidation,
} from '@/validation';
import { findUserWithEmail } from './user';
import prisma from '..';
import { generateRandomNumber } from '../utils/common';

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

  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    },
  });

  return !!user;
};

export const forgotPasswordStep1 = async ({ email }: ForgotPasswordStep1Validation) => {
  const user = await findUserWithEmail(email);

  if (!user) {
    throw new BadRequestException(ERROR_MESSAGES.userNotFound);
  }

  const confirmationCode = generateRandomNumber(4);

  const updatedUser = await prisma.user.update({ where: { email }, data: { confirmationCode } });
  //
  // send Email
  //

  return updatedUser.id;
};

export const forgotPasswordStep2 = async ({
  otpPassword,
  userId,
}: ForgotPasswordStep2Validation) => {
  if (isNaN(+otpPassword)) {
    throw new BadRequestException(ERROR_MESSAGES.somethingWentWrong);
  }

  const user = await prisma.user.findUnique({
    where: { id: userId.toString(), confirmationCode: +otpPassword },
  });

  if (!user) {
    throw new BadRequestException(ERROR_MESSAGES.invalidNumber);
  }

  return user.id;
};

export const forgotPasswordStep3 = async ({
  confirmPassword,
  newPassword,
  userId,
}: ForgotPasswordStep3Validation) => {
  if (confirmPassword !== newPassword) {
    throw new BadRequestException(ERROR_MESSAGES.passwordDontMatch);
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user) {
    throw new BadRequestException(ERROR_MESSAGES.somethingWentWrong);
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: { password: hashedPassword },
  });

  return !!updatedUser;
};
