import { S3 } from 'aws-sdk';

export class AWSService {
  s3: S3;

  constructor() {
    this.s3 = new S3({
      region: process.env.NEXT_PUBLIC_AWS_REGION,
      signatureVersion: 'v4',
      credentials: {
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY!,
        secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY!,
      },
    });
  }
  async getUploadUrl(key: string) {
    const Bucket = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME;

    const params = {
      Bucket,
      Key: key,
      Expires: 18000,
      ACL: 'public-read',
    };

    const url = await this.s3.getSignedUrlPromise('putObject', params);

    return { url };
  }
  async deleteAttachment(Key: string) {
    const existingImageObject = await this.s3
      .headObject({ Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME!, Key })
      .promise();

    console.log({ existingImageObject });

    if (!existingImageObject) {
      return;
    }

    console.log({ Key });

    return this.s3
      .deleteObject({ Bucket: process.env.NEXT_PUBLIC_AWS_BUCKET_NAME!, Key })
      .promise();
  }
}
