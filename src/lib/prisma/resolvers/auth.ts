import bcrypt from 'bcrypt';
import { BadRequestException } from 'next-api-decorators';
import { ERROR_MESSAGES } from '@/utils/constants/common';
import {
  ForgotPasswordStep1Validation,
  ForgotPasswordStep2Validation,
  ForgotPasswordStep3Validation,
  SignUpValidation,
} from '@/utils/validation';
import { UserResolver } from './user';
import prisma from '..';
import { Email } from '../services/sendgrid.service';
import { generateRandomNumber } from '../utils/common';

export class AuthResolver {
  static async signUp({ firstName, lastName, email, password }: SignUpValidation) {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!!existingUser) {
      throw new BadRequestException(ERROR_MESSAGES.userAlreadyExists);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const confirmationCode = generateRandomNumber(6);

    const user = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
        confirmationCode,
      },
    });

    await Email.sendConfirmationCodeEmail(user.email, confirmationCode, firstName)
      .then(res => console.log({ res }))
      .catch(err => console.log({ err }));

    return !!user;
  }

  static async forgotPasswordStep1({ email }: ForgotPasswordStep1Validation) {
    const user = await UserResolver.findUserWithEmail(email);

    if (!user) {
      throw new BadRequestException(ERROR_MESSAGES.userNotFound);
    }

    const confirmationCode = generateRandomNumber(4);

    await Email.sendForgotPasswordEmail(user.email, confirmationCode)
      .then(res => console.log({ res }))
      .catch(err => console.log({ err }));

    return prisma.user.update({ where: { email }, data: { confirmationCode } });
  }

  static async forgotPasswordStep2({ otpPassword }: ForgotPasswordStep2Validation) {
    if (isNaN(+otpPassword)) {
      throw new BadRequestException(ERROR_MESSAGES.somethingWentWrong);
    }

    const user = await prisma.user.findUnique({
      where: { confirmationCode: +otpPassword },
    });

    if (!user) {
      throw new BadRequestException(ERROR_MESSAGES.invalidNumber);
    }

    const confirmationCode = generateRandomNumber(4);

    await prisma.user.update({
      where: {
        confirmationCode: +otpPassword,
      },
      data: {
        confirmationCode,
      },
    });

    return confirmationCode;
  }

  static async forgotPasswordStep3({
    confirmPassword,
    newPassword,
    confirmationCode,
  }: ForgotPasswordStep3Validation) {
    if (confirmPassword !== newPassword) {
      throw new BadRequestException(ERROR_MESSAGES.passwordDontMatch);
    }

    const user = await prisma.user.findUnique({ where: { confirmationCode } });

    if (!user) {
      throw new BadRequestException(ERROR_MESSAGES.somethingWentWrong);
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    return !!updatedUser;
  }
}
