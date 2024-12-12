import pandas as pd

# Load the dataset
file_path = '/Users/justinrakestraw/PyCharm/TripsPerformed/consolidated_transport_data_corrected.csv'
df = pd.read_csv(file_path, low_memory=False)

# Convert 'Client ID' to numeric, coercing non-numeric values to NaN
df['Client ID'] = pd.to_numeric(df['Client ID'], errors='coerce')

# Save the cleaned data
output_file = '/Users/justinrakestraw/PyCharm/TripsPerformed/cleaned_column_data.csv'
df.to_csv(output_file, index=False)
print(f"Cleaned 'Client ID' column saved to {output_file}")