import bcrypt from 'bcrypt';
import { BadRequestException } from 'next-api-decorators';
import { User } from 'next-auth';
import { ERROR_MESSAGES } from '@/utils/constants/common';
import { ChangePasswordValidation, UserProfileFormValidation } from '@/utils/validation';
import prisma from '../index';

export class UserResolver {
  static async findUserWithEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  static async updateUserProfile(input: UserProfileFormValidation, user: NonNullable<User>) {
    return (
      await prisma.user.update({
        where: { id: user.id },
        data: input,
      })
    ).id;
  }

  static async changeUserPassword(
    { confirmPassword, newPassword, currentPassword }: ChangePasswordValidation,
    user: NonNullable<User>,
  ) {
    const isValid = await bcrypt.compare(currentPassword, user.password);

    if (!isValid) {
      throw new BadRequestException(ERROR_MESSAGES.invalidPassword);
    }

    if (confirmPassword !== newPassword) {
      throw new BadRequestException(ERROR_MESSAGES.passwordDontMatch);
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    return (
      await prisma.user.update({
        where: { id: user.id },
        data: { password: hashedPassword },
      })
    ).id;
  }
}
