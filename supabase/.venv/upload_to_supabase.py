from supabase import create_client, Client
import pickle
import os
import uuid
import logging
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)

# Supabase credentials from environment variables
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    raise EnvironmentError("Supabase URL or Key not found in environment variables.")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# Load vector data
vectors_path = "/Users/justinrakestraw/supabase/Detroit VA RFP/vectors.pkl"

# Verify the file exists before loading
if not os.path.exists(vectors_path):
    raise FileNotFoundError(f"Vector file not found: {vectors_path}")

# Try loading the vectors from the pickle file
try:
    with open(vectors_path, 'rb') as f:
        vectors = pickle.load(f)
    logging.info(f"Successfully loaded {len(vectors)} vectors from {vectors_path}.")
except Exception as e:
    raise ValueError(f"Error loading vectors from {vectors_path}: {e}")

# Example document contents (ensure this list matches the number of vectors)
document_contents = [
    "Content for document 1",
    "Content for document 2",
    "Content for document 3",
    "Content for document 4",
    "Content for document 5",
    "Content for document 6",
    "Content for document 7",
    "Content for document 8",
    "Content for document 9",
    "Content for document 10"
]

# Check number of vectors and document contents
num_vectors = len(vectors)
num_documents = len(document_contents)

logging.info(f"Number of vectors: {num_vectors}")
logging.info(f"Number of documents: {num_documents}")

if num_vectors != num_documents:
    logging.error(f"Mismatch between number of vectors ({num_vectors}) and document contents ({num_documents}).")
    raise ValueError("Mismatch between number of vectors and document contents.")

# Insert each document and its embedding into the Supabase table
for i, (vector, content) in enumerate(zip(vectors, document_contents)):
    formatted_vector = vector.tolist()  # Convert numpy array to list

    # Debugging: Print each vector and content being inserted
    logging.debug(f"Inserting document {i + 1}:")
    logging.debug(f"Content: {content}")
    logging.debug(f"Vector: {formatted_vector[:5]}... (Length: {len(formatted_vector)})")

    # Insert into Supabase
    try:
        response = supabase.table("detroit_documents").insert({
            "id": str(uuid.uuid4()),  # Generate a new UUID
            "content": content,
            "embedding": formatted_vector  # Insert as a list of floats
        }).execute()
        logging.info(f"Inserted document {i + 1}: {response}")
    except Exception as e:
        logging.error(f"Error inserting document {i + 1}: {e}")
