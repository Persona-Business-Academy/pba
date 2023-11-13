import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import { SIGN_IN_ROUTE } from './constants/routes';
import { getAuthToken } from './pages/api/auth/[...nextauth]';

const url = process.env.BASE_URL + SIGN_IN_ROUTE;

export async function middleware(req: NextApiRequest) {
  try {
    const token = await getAuthToken(req);
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
