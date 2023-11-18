import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { AuthOptions, getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/lib/prisma';
import { findUserWithEmail } from '@/lib/prisma/resolvers';
import { validateUserPassword } from '@/lib/prisma/utils/auth';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.JWT_SECRET,
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: { email: { type: 'text' }, password: { type: 'password' } },
      authorize: async credentials =>
        (await validateUserPassword(credentials?.email || '', credentials?.password || '')) || null,
    }),
  ],
  callbacks: {
    session: async ({ session }) => {
      const user = await findUserWithEmail(session.user?.email || '');
      return user
        ? {
            ...session,
            user: { firstName: user.firstName, lastName: user.lastName, email: user.email },
          }
        : session;
    },
    jwt: async ({ user, token }) => (!!user ? { ...token, id: user.id } : token),
  },
  pages: { signIn: '/signin' },
  session: { strategy: 'jwt' },
};
export const serverSession =  () => {
  try {
    return  getServerSession(authOptions);
  } catch (e) {
    throw e;
  }
};



export default NextAuth(authOptions);
