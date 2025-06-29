import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';



export async function GET(request, { params }) {
  try {
    const { db } = await connectToDatabase();
    const { slug } = params;
    // console.log('Received slug:', slug);

    const doctors = await db.collection('doctors').find({
      'category': slug
    }).toArray();

    // console.log('Found doctors:', doctors);

    if (!doctors || doctors.length === 0) {
      return NextResponse.json(
        { error: `No doctors found for category: ${slug}` },
        { status: 404 }
      );
    }

    return NextResponse.json(doctors);
  } catch (error) {
    console.error('Error in GET route:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
