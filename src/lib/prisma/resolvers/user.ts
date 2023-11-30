import { User } from '@prisma/client';
import { UserProfileFormData } from '@/utils/models/auth';
import prisma from '../index';

export class UserResolver {
  static async findUserWithEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  static async updateUserProfile(input: UserProfileFormData, user: User) {
    return (
      await prisma.user.update({
        where: { id: user.id },
        data: input,
      })
    ).id;
  }
}
