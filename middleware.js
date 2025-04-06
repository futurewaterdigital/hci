import { NextResponse } from 'next/server';

export async function middleware(request) {
  // Check if the request is for an admin route
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Skip middleware for login page
    if (request.nextUrl.pathname === '/admin') {
      return NextResponse.next();
    }

    // Get the token from the Authorization header or cookie
    const authHeader = request.headers.get('authorization');
    const token = authHeader?.split(' ')[1] || request.cookies.get('adminToken')?.value;

    if (!token) {
      console.log('No token found, redirecting to login');
      return NextResponse.redirect(new URL('/admin', request.url));
    }

    // For now, we'll just check if the token exists
    // In a production environment, you might want to implement a more secure verification
    if (token) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/admin/:path*',
}; 