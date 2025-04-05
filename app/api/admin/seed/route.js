import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Admin from '@/app/models/Admin';

export async function GET() {
  try {
    await dbConnect();

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: 'admin@example.com' });
    if (existingAdmin) {
      return NextResponse.json({
        message: 'Admin user already exists',
        admin: existingAdmin
      });
    }

    // Create new admin
    const admin = await Admin.create({
      email: 'admin@example.com',
      password: 'admin123' // This will be hashed by the pre-save middleware
    });

    return NextResponse.json({
      message: 'Admin user created successfully',
      admin: {
        id: admin._id,
        email: admin.email
      }
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error creating admin user', error: error.message },
      { status: 500 }
    );
  }
} 