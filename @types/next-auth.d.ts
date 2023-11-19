import { Prisma } from '@prisma/client';
import { ISODateString } from 'next-auth';
import { UserResolver } from '@/lib/prisma/resolvers';

declare module 'next-auth' {
  export type User = Prisma.PromiseReturnType<typeof UserResolver.findUserWithEmail>;
  interface Session {
    expires: ISODateString;
    token: { email: string; iat: number; jti: string; exp: number };
    user: User;
  }
}
