import AWS from 'aws-sdk';

// Configure AWS SDK
const spacesEndpoint = new AWS.Endpoint(process.env.NEXT_PUBLIC_DO_SPACES_ENDPOINT);
const s3 = new AWS.S3({
  endpoint: spacesEndpoint,
  accessKeyId: process.env.NEXT_PUBLIC_DO_SPACES_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_DO_SPACES_SECRET,
});

export const uploadFile = async (file, folder = 'doctors') => {
  try {
    const fileExtension = file.name.split('.').pop();
    const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExtension}`;
    
    const params = {
      Bucket: process.env.NEXT_PUBLIC_DO_SPACES_BUCKET,
      Key: fileName,
      Body: file,
      ACL: 'public-read',
      ContentType: file.type,
    };

    const result = await s3.upload(params).promise();
    return result.Location;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
}; 