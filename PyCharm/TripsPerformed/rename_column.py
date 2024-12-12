import pandas as pd

# Load the consolidated CSV file
file_path = '/Users/justinrakestraw/PyCharm/TripsPerformed/consolidated_transport_data.csv'
df = pd.read_csv(file_path)

# Rename the incorrect column name
df = df.rename(columns={'Dest depart ime': 'Dest depart time'})

# Save the updated CSV file with the corrected column name
output_file = '/Users/justinrakestraw/PyCharm/TripsPerformed/consolidated_transport_data_corrected.csv'
df.to_csv(output_file, index=False)

print(f"Column renamed and saved to {output_file}")
print(df.head())