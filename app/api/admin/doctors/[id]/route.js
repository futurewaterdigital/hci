import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(request, { params }) {
  try {
    const { db } = await connectToDatabase();
    const { id } = params;

    if (!id) {
      return new Response(JSON.stringify({ error: 'Doctor ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const doctor = await db.collection('doctors').findOne({ _id: new ObjectId(id) });

    if (!doctor) {
      return new Response(JSON.stringify({ error: 'Doctor not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(doctor), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching doctor:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch doctor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function PUT(request, { params }) {
  try {
    const { db } = await connectToDatabase();
    const { id } = params;
    const body = await request.json();

    if (!id) {
      return new Response(JSON.stringify({ error: 'Doctor ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Remove _id from the update data if it exists
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { _id, ...updateData } = body;
    
    // Add updatedAt timestamp
    updateData.updatedAt = new Date();

    const result = await db.collection('doctors').findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: updateData },
      { returnDocument: 'after' }
    );

    if (!result) {
      return new Response(JSON.stringify({ error: 'Doctor not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error updating doctor:', error);
    return new Response(JSON.stringify({ error: 'Failed to update doctor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { db } = await connectToDatabase();
    const { id } = params;

    if (!id) {
      return new Response(JSON.stringify({ error: 'Doctor ID is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const result = await db.collection('doctors').findOneAndDelete({ _id: new ObjectId(id) });

    if (!result) {
      return new Response(JSON.stringify({ error: 'Doctor not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ message: 'Doctor deleted successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error deleting doctor:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete doctor' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 