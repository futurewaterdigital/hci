import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json(
    { message: 'Logged out successfully' },
    { status: 200 }
  );

  // Clear the auth cookie
  response.cookies.set('adminToken', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    expires: new Date(0), // Set expiration to the past to delete the cookie
  });

  return response;
} 