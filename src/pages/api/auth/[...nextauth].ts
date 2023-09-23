import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { findUserWithEmail } from '@/lib/prisma/resolvers';
import { validateUserPassword } from '@/lib/prisma/utils/auth';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { type: 'text' },
        password: { type: 'password' },
      },
      async authorize(credentials): Promise<{ id: string; email: string } | null> {
        const user = await validateUserPassword(
          credentials?.email || '',
          credentials?.password || '',
        );

        return user || null;
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  callbacks: {
    async session({ session }) {
      const user = await findUserWithEmail(session.user?.email || '');

      return user
        ? {
            ...session,
            user: {
              name: `${user.firstName} ${user.lastName}`,
              email: user.email,
            },
          }
        : session;
    },

    async jwt({ token, user }) {
      if (user) {
        return { ...token, id: user.id };
      }
      return token;
    },
  },
  pages: {
    signIn: '/signin',
  },
  session: { strategy: 'jwt' },
};

export default NextAuth(authOptions);
