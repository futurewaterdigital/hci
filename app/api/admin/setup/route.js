import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Admin from '@/app/models/Admin';

export async function POST(request) {
  try {
    await dbConnect();

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: 'admin@example.com' });
    if (existingAdmin) {
      return NextResponse.json(
        { message: 'Admin user already exists' },
        { status: 400 }
      );
    }

    // Create new admin
    const admin = new Admin({
      email: 'admin@example.com',
      password: 'admin123'
    });

    await admin.save();

    return NextResponse.json(
      { message: 'Admin user created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Setup error:', error);
    return NextResponse.json(
      { message: 'Server error', error: error.message },
      { status: 500 }
    );
  }
} 