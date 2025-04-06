import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Admin from '@/app/models/Admin';
import { SignJWT } from 'jose';

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    console.log('Login attempt with:', body);

    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Find admin by email
    const admin = await Admin.findOne({ email });
    console.log('Found admin:', admin ? 'yes' : 'no');

    if (!admin) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Compare password
    const isMatch = await admin.comparePassword(password);
    console.log('Password match:', isMatch);

    if (!isMatch) {
      return NextResponse.json(
        { message: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Create JWT token using jose
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET || 'your-secret-key'
    );

    const token = await new SignJWT({ id: admin._id })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('24h')
      .sign(secret);

    const response = NextResponse.json({
      token,
      admin: {
        id: admin._id,
        email: admin.email
      }
    });

    // Set the token in a cookie
    response.cookies.set('adminToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 // 1 day
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { message: 'Server error', error: error.message },
      { status: 500 }
    );
  }
} 