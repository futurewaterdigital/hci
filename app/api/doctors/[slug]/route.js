import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

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
    const { db } = await connectToDatabase();
    const { slug } = params;
    console.log('Received slug:', slug);  // Debug log

    const namePattern = createNameFromSlug(slug);
    console.log('Searching with pattern:', namePattern);  // Debug log

    const doctor = await db.collection('doctors').findOne({ 
      name: { $regex: namePattern } 
    });
    
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
    const { db } = await connectToDatabase();
    const { slug } = params;
    const body = await request.json();

    const namePattern = createNameFromSlug(slug);
    
    // Add updated timestamp
    const updateData = {
      ...body,
      updatedAt: new Date()
    };

    const result = await db.collection('doctors').findOneAndUpdate(
      { name: { $regex: namePattern } },
      { $set: updateData },
      { returnDocument: 'after' }
    );

    if (!result.value) {
      return NextResponse.json(
        { error: 'Doctor not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(result.value);
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
    const { db } = await connectToDatabase();
    const { slug } = params;

    const namePattern = createNameFromSlug(slug);
    const result = await db.collection('doctors').findOneAndDelete({ 
      name: { $regex: namePattern } 
    });

    if (!result.value) {
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