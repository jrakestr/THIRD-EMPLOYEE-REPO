from sentence_transformers import SentenceTransformer
import os
import pickle
import numpy as np

# Define the path to your data directory
data_dir = "Detroit VA RFP"

# Function to load text files from the data directory
def load_files(data_dir):
    files_content = []
    for filename in os.listdir(data_dir):
        if filename.endswith(".txt"):  # Ensure we only process .txt files
            with open(os.path.join(data_dir, filename), 'r', encoding='utf-8') as f:
                files_content.append(f.read())
    return files_content

# Load text data from the directory
texts = load_files(data_dir)
print("Files to vectorize:", texts)

# Initialize a pre-trained sentence transformer model
model = SentenceTransformer('all-MiniLM-L6-v2')

# Vectorize all the texts
vectors = model.encode(texts)

# Save the vectors to a file
output_path = "/Users/justinrakestraw/supabase/Detroit VA RFP/vectors.pkl"
with open(output_path, 'wb') as f:
    pickle.dump(vectors, f)

print("Vectorization complete. Vectors saved to 'vectors.pkl'.")