import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  try {
    const token = await getToken({ req, secret: process.env.JWT_SECRET });
    if (!token || !token.email) {
      return NextResponse.redirect(`${process.env.BASE_URL}/signin`);
    }
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(`${process.env.BASE_URL}/signin`);
  }
}

export const config = { matcher: ['/todo'] };