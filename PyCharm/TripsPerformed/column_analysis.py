import pandas as pd

# Load the dataset
file_path = '/Users/justinrakestraw/PyCharm/TripsPerformed/consolidated_transport_data_corrected.csv'
df = pd.read_csv(file_path, low_memory=False)

# Analyze data types in Column 8 (e.g., 'Client ID')
print("Data types in 'Client ID' column:")
print(df['Client ID'].apply(type).value_counts())

# Find rows with non-numeric values in 'Client ID'
non_numeric_rows = df[~df['Client ID'].apply(lambda x: isinstance(x, (int, float)))]
print("Non-numeric rows in 'Client ID':")
print(non_numeric_rows)