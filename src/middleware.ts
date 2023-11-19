import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import { SIGN_IN_ROUTE } from './utils/constants/routes';
import { validateTokenPayload } from './utils/helpers';

export async function middleware(req: NextApiRequest) {
  const url = process.env.BASE_URL + SIGN_IN_ROUTE;

  try {
    const token = await validateTokenPayload(req);
    if (!token) {
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: [],
};
