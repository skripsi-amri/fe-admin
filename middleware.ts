import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const tx = request.cookies.get('tx');
    const { pathname, origin } = request.nextUrl;

    if (pathname == "/favicon.ico") {
        return NextResponse.next();
    }
    if (
        pathname == "/api/logout" ||
        pathname == "/api/token"
    ) {
    }
    if (pathname === '/_next/:path*') {
        return NextResponse.next();
    }

    if (!tx) {
        if (pathname.includes('/app') || pathname === '/') {
            return NextResponse.redirect(`${origin}/login`);
        }
    }

    try {
        if (pathname === "/login" || pathname === "/") {
            if (tx) {
                return NextResponse.redirect(`${origin}/app`);
            }
        }
        return NextResponse.next();
    } catch (error) {
        if (pathname !== '/login') {
            return NextResponse.redirect(`${origin}/login`);
        }
        return NextResponse.next();
    }
}