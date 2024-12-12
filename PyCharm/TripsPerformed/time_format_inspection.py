import pandas as pd

# Load the dataset
file_path = '/Users/justinrakestraw/PyCharm/TripsPerformed/consolidated_transport_data_corrected.csv'
df = pd.read_csv(file_path, low_memory=False)

# Inspect raw time columns to determine their format
print(df[['Sch Time', 'Origin Actual Arrive time']].head())

# Convert time columns to 24-hour format
time_fields = ['Sch Time', 'Origin Actual Arrive time']
for field in time_fields:
    if field in df.columns:
        # Specify 12-hour format for conversion, coerce invalid values
        df[field] = pd.to_datetime(df[field], format='%I:%M:%S %p', errors='coerce').dt.strftime('%H:%M:%S')
    else:
        print(f"Warning: Column '{field}' not found.")

# Save the file after conversion
output_file = '/Users/justinrakestraw/PyCharm/TripsPerformed/converted_time_data.csv'
df.to_csv(output_file, index=False)
print(f"Converted time fields saved to {output_file}")