import pandas as pd

# Load the consolidated CSV file
file_path = '/Users/justinrakestraw/PyCharm/TripsPerformed/consolidated_transport_data_corrected.csv'
df = pd.read_csv(file_path, low_memory=False)

# 1. Convert time fields to 24-hour format
time_fields = ['Sch Time', 'Origin Actual Arrive time', 'Dest depart time']
for field in time_fields:
    if field in df.columns:
        df[field] = pd.to_datetime(df[field], format='%I:%M:%S %p', errors='coerce').dt.strftime('%H:%M:%S')

# 2. Clean "mins" and "hours" from the relevant fields
df['Minutes early or late'] = pd.to_numeric(df['Minutes early or late'].str.replace(r'mins', '', regex=True), errors='coerce')
df['Appt minutes early or late'] = pd.to_numeric(df['Appt minutes early or late'].str.replace(r'mins', '', regex=True), errors='coerce')
df['Trip duration'] = pd.to_numeric(df['Trip duration'].str.replace(r'hours', '', regex=True), errors='coerce')

# 3. Remove decimal points and convert to integers for numeric fields
numeric_fields = ['Starting Odometer', 'Ending Odometer', 'Client ID']
for field in numeric_fields:
    df[field] = pd.to_numeric(df[field], errors='coerce').fillna(0).astype(int)

# 4. Handle missing time fields, filling with a default value if necessary
for field in time_fields:
    if field in df.columns:
        df[field] = df[field].fillna('00:00:00')

# 5. Remove unnecessary columns
columns_to_drop = ['Related Client', 'Apt Time', 'Status', 'Mode', 'Unnamed 1', 'Unnamed 2', 'Accident/Incident - Employee Name']
df = df.drop(columns=columns_to_drop, errors='ignore')

# 6. Save the cleaned data to a new CSV file
output_file = '/Users/justinrakestraw/PyCharm/TripsPerformed/cleaned_transport_data.csv'
df.to_csv(output_file, index=False)

print(f"Cleaned data saved to {output_file}")