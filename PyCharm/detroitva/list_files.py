import boto3

# S3 connection details
endpoint_url = "https://gwvtpzjzrakggdbiwlyw.supabase.co/storage/v1/s3"
region_name = "us-east-1"
access_key_id = "17e335dbc1533939f2807572cca80a82"
secret_access_key = "533c1180990f039f4ac9cfbb11e31f1c66c724981f56db1109e80e96e610095e"

# Initialize the S3 client
s3_client = boto3.client(
    "s3",
    region_name=region_name,
    endpoint_url=endpoint_url,
    aws_access_key_id=access_key_id,
    aws_secret_access_key=secret_access_key
)

# List the files in the bucket
bucket_name = "detroit-va"  # Replace with your bucket name
response = s3_client.list_objects_v2(Bucket=bucket_name)

# Check if there are any files
if 'Contents' in response:
    print("Files in the bucket:")
    for obj in response['Contents']:
        print(obj['Key'])
else:
    print("No files found in the bucket.")