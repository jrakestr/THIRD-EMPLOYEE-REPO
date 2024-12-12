from openai import OpenAI

# Step 1: Initialize OpenAI client
client = OpenAI(base_url="http://localhost:1234/v1", api_key="lm-studio")

# Step 2: Read the content from the file and ensure the path is correct
file_path = '/Applications/embedding.txt'  # Adjust this path as necessary

try:
    with open(file_path, 'r') as file:
        document = file.read()
except FileNotFoundError:
    print(f"File not found at path: {file_path}")
    exit(1)

# Step 3: Split the document into chunks (paragraphs in this case)
chunks = document.split('\n\n')  # Adjust the splitting logic as needed

# Step 4: Define the function to generate embeddings for each chunk
def generate_embeddings(chunks, model="SanctumAI/Meta-Llama-3-8B-Instruct-GGUF/meta-llama-3-8b-instruct.Q2_K.gguf"):
    embeddings = []
    for chunk in chunks:
        # Call the embedding generation model and collect the response
        response = client.embeddings.create(input=[chunk], model=model)
        embeddings.append(response.data[0].embedding)
    return embeddings

# Step 5: Generate embeddings for the document chunks
document_embeddings = generate_embeddings(chunks)

# Step 6: Print the result to verify
print(document_embeddings)