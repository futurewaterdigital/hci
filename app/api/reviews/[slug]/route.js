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

    // Create a name pattern from the slug
    const namePattern = createNameFromSlug(slug);
    console.log('Searching with pattern:', namePattern);  // Debug log

    // Use a regular expression directly in the query without $options
    const reviewsCursor = await db.collection('reviews').find({
      doctorName: { $regex: new RegExp(namePattern, 'i') }, // 'i' for case-insensitive search
    });

    const reviews = await reviewsCursor.toArray(); // Convert cursor to array

    // Get the count of reviews (length)
    const totalReviews = reviews.length;
    console.log('Found reviews:', reviews);  // Debug log

    if (totalReviews === 0) {
      console.log('No reviews found for pattern:', namePattern);  // Debug log
      return NextResponse.json(
        { error: 'Review not found' },
        { status: 404 }
      );
    }

    // Return reviews along with the count
    return NextResponse.json({
      reviews: reviews,
      total: totalReviews, // Include the count of reviews
    });
  } catch (error) {
    console.error('Error in GET route:', error);  // Debug log
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}

// PUT route for updating review details
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

    const result = await db.collection('reviews').findOneAndUpdate(
      { 
        doctorName: { $regex: namePattern } },
      { $set: updateData },
      { returnDocument: 'after' }
    );

    if (!result.value) {
      return NextResponse.json(
        { error: 'Review not found' },
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

// DELETE route for removing a review
export async function DELETE(request, { params }) {
  try {
    const { db } = await connectToDatabase();
    const { slug } = params;

    const namePattern = createNameFromSlug(slug);
    const result = await db.collection('reviews').findOneAndDelete({ 
      doctorName: { $regex: namePattern } 
    });

    if (!result.value) {
      return NextResponse.json(
        { error: 'Review not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: 'Review deleted successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
} 