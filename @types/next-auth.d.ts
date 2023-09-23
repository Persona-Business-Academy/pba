// eslint-disable-next-line unused-imports/no-unused-imports
import NextAuth, { ISODateString } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    expires: ISODateString;
    token: { email: string; iat: number; jti: string; exp: number };
    user: any;
  }
}
// todo
