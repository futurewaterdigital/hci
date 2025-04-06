import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import AWS from 'aws-sdk';

// Configure AWS SDK for DigitalOcean Spaces
const spacesEndpoint = new AWS.Endpoint('blr1.digitaloceanspaces.com');
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.NEXT_PUBLIC_DO_SPACES_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_DO_SPACES_SECRET,
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
  sslEnabled: true,
  region: 'blr1'
});

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

    // First get the doctor to access their image URL
    const doctor = await db.collection('doctors').findOne({ 
      _id: new ObjectId(id)
    });

    if (!doctor) {
      return new Response(JSON.stringify({ error: 'Doctor not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Delete the image from DigitalOcean Spaces if it exists
    if (doctor.image && doctor.image.startsWith('https://')) {
      try {
        // Extract the key from the full URL
        const url = new URL(doctor.image);
        const key = url.pathname.split('/').slice(2).join('/');

        const deleteParams = {
          Bucket: process.env.NEXT_PUBLIC_DO_SPACES_BUCKET,
          Key: key,
        };

        await s3.deleteObject(deleteParams).promise();
        console.log('Successfully deleted image from DigitalOcean Spaces');
      } catch (error) {
        console.error('Error deleting image from DigitalOcean Spaces:', error);
        // Continue with doctor deletion even if image deletion fails
      }
    }

    // Delete the doctor from the database
    const result = await db.collection('doctors').deleteOne({
      _id: new ObjectId(id)
    });

    if (result.deletedCount === 0) {
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
    console.error('Delete error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 