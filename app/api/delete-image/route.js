import { NextResponse } from 'next/server';
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

export async function POST(request) {
  try {
    const { imageUrl } = await request.json();

    if (!imageUrl) {
      return NextResponse.json({ error: 'No image URL provided' }, { status: 400 });
    }

    // Extract the key from the full URL
    const url = new URL(imageUrl);
    // Remove the bucket name and domain from the path
    const key = url.pathname.split('/').slice(2).join('/');

    // console.log('Deleting image with key:', key);

    const params = {
      Bucket: process.env.NEXT_PUBLIC_DO_SPACES_BUCKET,
      Key: key,
    };

    await s3.deleteObject(params).promise();
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json({ 
      error: 'Failed to delete image',
      details: error.message 
    }, { status: 500 });
  }
} 