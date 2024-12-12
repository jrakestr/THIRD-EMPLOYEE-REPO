import pandas as pd
import glob
import os

# Correct folder path after renaming
csv_folder = '/Users/justinrakestraw/Performed Trips - 2020-2023/'

# Use glob to get a list of all CSV files in the folder
csv_files = glob.glob(os.path.join(csv_folder, "*.csv"))

# Debug: print the CSV files found
print(f"CSV files found: {csv_files}")

# Check if files are found
if not csv_files:
    raise FileNotFoundError("No CSV files found in the directory.")

# Initialize an empty list to store DataFrames
dataframes = []

# Iterate over each CSV file and append the DataFrame to the list
for file in csv_files:
    df = pd.read_csv(file)
    dataframes.append(df)

# Concatenate all DataFrames into a single DataFrame
combined_df = pd.concat(dataframes, ignore_index=True, sort=False)

# Save the combined DataFrame to a new CSV file
output_file = './consolidated_transport_data.csv'
combined_df.to_csv(output_file, index=False)

# Print success message and a sample of the data
print(f"CSV files consolidated into {output_file}.")
print(combined_df.head())