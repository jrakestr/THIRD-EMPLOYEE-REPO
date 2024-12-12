import json
import os
import boto3
import openai

# S3 connection details
endpoint_url = "https://gwvtpzjzrakggdbiwlyw.supabase.co/storage/v1/s3"
region_name = "us-east-1"
access_key_id = "17e335dbc1533939f2807572cca80a82"
secret_access_key = "533c1180990f039f4ac9cfbb11e31f1c66c724981f56db1109e80e96e610095e"

# OpenAI API key
openai.api_key = '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'

# Initialize the S3 client
s3_client = boto3.client(
    "s3",
    region_name=region_name,
    endpoint_url=endpoint_url,
    aws_access_key_id=access_key_id,
    aws_secret_access_key=secret_access_key
)

# Supabase bucket details
bucket_name = "detroit-va"

# Function to get embeddings from text using the new OpenAI API format
def get_embeddings(text):
    try:
        response = openai.Embedding.create(
            model="text-embedding-ada-002",  # Correct model name
            input=text  # The input should be a string or a list of strings
        )
        return response['data'][0]['embedding'] if response['data'] else None
    except Exception as e:
        print(f"Error generating embeddings: {e}")
        return None

# Directory to save the vectors locally
os.makedirs("vectors", exist_ok=True)

# Fetch the list of text files in the bucket
response = s3_client.list_objects_v2(Bucket=bucket_name)
if 'Contents' in response:
    for obj in response['Contents']:
        file_key = obj['Key']
        if file_key.endswith(".txt"):
            print(f"Downloading file: {file_key}")
            s3_client.download_file(bucket_name, file_key, "temp.txt")
            with open("temp.txt", "r") as file:
                text = file.read()

            embeddings = get_embeddings(text)
            if embeddings:
                vector_file = os.path.join("vectors", file_key.replace("/", "_") + ".json")
                with open(vector_file, "w") as vf:
                    json.dump(embeddings, vf)
                print(f"Embeddings saved for {file_key} as {vector_file}")
            else:
                print(f"Failed to generate embeddings for {file_key}.")
else:
    print("No files found in the bucket.")