import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import { validateJwt } from './lib/prisma/utils/auth';

export async function middleware(req: NextApiRequest) {
  try {
    const isInvalidToken = await validateJwt(req);
    if (isInvalidToken) {
      return NextResponse.redirect(`${process.env.BASE_URL}/signin`);
    }
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(`${process.env.BASE_URL}/signin`);
  }
}

export const config = { matcher: ['/todo'] };
