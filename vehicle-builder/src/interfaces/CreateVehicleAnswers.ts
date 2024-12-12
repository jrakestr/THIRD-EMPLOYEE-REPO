export interface CreateVehicleAnswers {
  vin: string;
  type: 'Car' | 'Truck' | 'Motorbike';
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  towingCapacity?: number; // For Trucks
  motorbikeType?: string;  // For Motorbikes
}
