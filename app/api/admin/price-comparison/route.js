import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
// import { ObjectId } from 'mongodb';

export async function GET() {
  try {
    const { db } = await connectToDatabase();
    
    // Get medical procedures
    const medicalProcedures = await db.collection('medicalProcedures').find({}).toArray();
    
    // Get hotel prices
    const hotelPrices = await db.collection('hotelPrices').find({}).toArray();
    
    return NextResponse.json({
      medicalProcedures,
      hotelPrices
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch price comparison data' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { type, data } = await request.json();
    const { db } = await connectToDatabase();

    if (type === 'medical') {
      const { procedure, prices } = data;
      await db.collection('medicalProcedures').updateOne(
        { procedure },
        { $set: prices },
        { upsert: true }
      );
    } else if (type === 'hotel') {
      const { category, prices } = data;
      await db.collection('hotelPrices').updateOne(
        { category },
        { $set: prices },
        { upsert: true }
      );
    }

    return NextResponse.json({ message: 'Prices updated successfully' });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update prices' },
      { status: 500 }
    );
  }
} 