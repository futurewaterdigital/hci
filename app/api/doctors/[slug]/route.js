import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Doctor from '@/app/models/Doctor';

const createNameFromSlug = (slug) => {
  // First, clean up the slug
  const cleanSlug = slug
    .replace(/-/g, ' ')  // Replace hyphens with spaces
    .trim();

  // Create a more lenient regex pattern
  const namePattern = cleanSlug
    .split(' ')
    .filter(Boolean)
    .map(part => `(?=.*${part})`)  // Positive lookahead for each part
    .join('');

  console.log('Slug:', slug);  // Debug log
  console.log('Clean slug:', cleanSlug);  // Debug log
  console.log('Name pattern:', namePattern);  // Debug log

  return new RegExp(namePattern, 'i');
};

export async function GET(request, { params }) {
  try {
    await dbConnect();
    const { slug } = params;
    console.log('Received slug:', slug);  // Debug log

    const namePattern = createNameFromSlug(slug);
    console.log('Searching with pattern:', namePattern);  // Debug log

    const doctor = await Doctor.findOne({ name: { $regex: namePattern } });
    console.log('Found doctor:', doctor);  // Debug log

    if (!doctor) {
      console.log('No doctor found for pattern:', namePattern);  // Debug log
      return NextResponse.json(
        { error: 'Doctor not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(doctor);
  } catch (error) {
    console.error('Error in GET route:', error);  // Debug log
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// PUT route for updating doctor details
export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const { slug } = params;
    const body = await request.json();

    const namePattern = createNameFromSlug(slug);
    const doctor = await Doctor.findOneAndUpdate(
      { name: { $regex: namePattern } },
      body,
      { new: true, runValidators: true }
    );

    if (!doctor) {
      return NextResponse.json(
        { error: 'Doctor not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(doctor);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// DELETE route for removing a doctor
export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const { slug } = params;

    const namePattern = createNameFromSlug(slug);
    const doctor = await Doctor.findOneAndDelete({ name: { $regex: namePattern } });

    if (!doctor) {
      return NextResponse.json(
        { error: 'Doctor not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Doctor deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
} 