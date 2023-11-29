import NextAuth, { AuthOptions, getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { UserResolver } from '@/lib/prisma/resolvers';
import { validateUserPassword } from '@/lib/prisma/utils/auth';

export const authOptions: AuthOptions = {
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
      const user = await UserResolver.findUserWithEmail(session.user?.email || '');

      if (!user) {
        return session;
      }

      const { password: _, ...userWithoutPassword } = user;
      return { ...session, user: userWithoutPassword };
    },
  },

  pages: { signIn: '/signin', error: '/signin' },
  session: { strategy: 'jwt' },
};

export const serverSession = () => {
  try {
    return getServerSession(authOptions);
  } catch (e) {
    throw e;
  }
};

export default NextAuth(authOptions);
