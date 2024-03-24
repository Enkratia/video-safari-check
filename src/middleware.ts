import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// nextjs выцепляет имя контейнера вместо hostname в docker production (использовать вместо req.url + заменять req.nextUrl.hostname | port)
import { FRONTEND_URL } from "./utils/constants";

const adminRoutes: AdminRoutesType = ["/dashboard"];
const protectedRoutes: ProtectedRoutesType = ["/account"];

export async function middleware(req: NextRequest) {
  req.nextUrl.hostname = new URL(FRONTEND_URL).hostname;
  req.nextUrl.port = new URL(FRONTEND_URL).port;

  // **
  const isProtectedPathname = (pathname: string) => {
    return protectedRoutes.find((protectedRouteName: string) => {
      return pathname.startsWith(protectedRouteName);
    });
  };

  // **
  const isAdminPathname = (pathname: string) => {
    return adminRoutes.find((adminRouteName: string) => {
      return pathname.startsWith(adminRouteName);
    });
  };

  // **
  const isAuthenticated = async () => {
    const token = await getToken({ req });
    if (!token) return false;

    const refreshTokenExpiresIn = token.backendTokens?.refreshExpiresIn || 0;
    if (Date.now() > refreshTokenExpiresIn) return false;

    return token;
  };

  // **
  const isAdmin = async () => {
    const token = await isAuthenticated();

    if (!token) return false;
    if (!token.user?.isAdmin) return false;

    return true;
  };

  // Routes protector
  // **
  if (isAdminPathname(req.nextUrl.pathname)) {
    if (!(await isAdmin())) {
      return NextResponse.redirect(
        new URL(`/auth/signin?callbackUrl=${req.nextUrl}`, FRONTEND_URL),
      );
    }
  }

  // **
  if (isProtectedPathname(req.nextUrl.pathname)) {
    if (!(await isAuthenticated())) {
      return NextResponse.redirect(
        new URL(`/auth/signin?callbackUrl=${req.nextUrl}`, FRONTEND_URL),
      );
    }
  }

  // **
  return NextResponse.next();
}

// **
export const config = {
  matcher: ["/dashboard/:path", "/account/:path"],
};
