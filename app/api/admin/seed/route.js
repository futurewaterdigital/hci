import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

export async function GET() {
  try {
    const { db } = await connectToDatabase();

    // Check if admin already exists
    const existingAdmin = await db.collection('admins').findOne({ 
      email: 'admin@healthcareinternational.in',
      role: 'admin'
    });

    if (existingAdmin) {
      return NextResponse.json({
        message: 'Admin user already exists',
        admin: {
          id: existingAdmin._id,
          email: existingAdmin.email,
          name: existingAdmin.name
        }
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('GlobalIndia@2026', salt);

    // Create new admin
    const newAdmin = {
      email: 'admin@healthcareinternational.in',
      password: hashedPassword,
      name: 'Admin User',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await db.collection('admins').insertOne(newAdmin);

    return NextResponse.json({
      message: 'Admin user created successfully',
      admin: {
        id: result.insertedId,
        email: newAdmin.email,
        name: newAdmin.name
      }
    });
  } catch (error) {
    console.error('Error creating admin user:', error);
    return NextResponse.json(
      { 
        message: 'Error creating admin user', 
        error: error.message,
        details: error.stack
      },
      { status: 500 }
    );
  }
} 