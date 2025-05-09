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
    const formData = await request.formData();
    const file = formData.get('file');
    const doctorName = formData.get('doctorName');

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    if (!doctorName) {
      return NextResponse.json({ error: 'Doctor name is required' }, { status: 400 });
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Create a sanitized filename using doctor's name and timestamp
    const sanitizedDoctorName = doctorName
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-') // Replace non-alphanumeric characters with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .replace(/^-|-$/g, ''); // Remove leading/trailing hyphens
    
    const timestamp = Date.now();
    const fileExtension = file.name.split('.').pop();
    const fileName = `doctors/${sanitizedDoctorName}-${timestamp}.${fileExtension}`;
    
    const params = {
      Bucket: process.env.NEXT_PUBLIC_DO_SPACES_BUCKET,
      Key: fileName,
      Body: buffer,
      ACL: 'public-read',
      ContentType: file.type,
    };

    const result = await s3.upload(params).promise();
    
    return NextResponse.json({ url: result.Location });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ 
      error: 'Failed to upload file',
      details: error.message 
    }, { status: 500 });
  }
} 