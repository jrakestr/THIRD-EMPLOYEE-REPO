import pandas as pd

# Correct file path (the latest version you provided)
file_path = '/Users/justinrakestraw/Library/CloudStorage/GoogleDrive-jrakestr@gmail.com/My Drive/TransitTrends/enhanced_transport_data_with_new_features.csv'

# Load the latest CSV file into a DataFrame
df = pd.read_csv(file_path, dtype=str)

# Convert relevant columns to datetime for accurate calculations
df['Date'] = pd.to_datetime(df['Date'], errors='coerce')
df['Origin Actual depart time'] = pd.to_datetime(df['Origin Actual depart time'], errors='coerce')
df['Dest arrive time'] = pd.to_datetime(df['Dest arrive time'], errors='coerce')

# Combine 'Date' and 'Origin Actual depart time' into a single datetime column for sorting
df['Departure DateTime'] = pd.to_datetime(
    df['Date'].astype(str) + ' ' + df['Origin Actual depart time'].dt.time.astype(str), errors='coerce')

# Step 1: Sort by 'TDP ID #', 'Date', and 'Departure DateTime' to ensure trips are in the correct order
df.sort_values(by=['TDP ID #', 'Date', 'Departure DateTime'], inplace=True)

# Step 2: Create a new column to count the number of active passengers in the vehicle
df['Active Passengers'] = 0  # Initialize column to zero

# Step 3: Calculate cumulative passengers for each trip
for driver, group in df.groupby(['TDP ID #', 'Date']):
    active_passengers = 0
    for index, row in group.iterrows():
        # Increment count when a passenger is picked up
        active_passengers += 1
        df.at[index, 'Active Passengers'] = active_passengers

        # Decrement count when a passenger is dropped off
        active_passengers -= len(df[(df['TDP ID #'] == driver) &
                                    (df['Date'] == row['Date']) &
                                    (df['Dest arrive time'] <= row['Origin Actual depart time']) &
                                    (df['Dest arrive time'] > row['Origin Actual depart time'] - pd.Timedelta(
                                        minutes=15))])  # Adjust condition as needed

# Step 4: Adjust the active passenger count to be cumulative for each trip
df['Cumulative Passengers'] = df.groupby(['TDP ID #', 'Date'])['Active Passengers'].cumsum()

# Optional: Keep only relevant columns for a clearer output
output_columns = ['Date', 'TDP ID #', 'Origin Actual depart time', 'Dest arrive time', 'Departure DateTime',
                  'Trip Order', 'Active Passengers', 'Cumulative Passengers', 'Record ID#']
passenger_count_df = df[output_columns]

# Save the updated DataFrame with cumulative passenger count to a new CSV file
output_file_path = '/Users/justinrakestraw/Library/CloudStorage/GoogleDrive-jrakestr@gmail.com/My Drive/TransitTrends/driver_trip_order_with_cumulative_passengers.csv'
passenger_count_df.to_csv(output_file_path, index=False)

print(f"Cumulative passenger count calculation completed. File saved as '{output_file_path}'.")
