// types.ts

export interface OperationFTE {
  role: string;
  count: number;
  annualWage: number;
}

export interface OperatingExpense {
  category: string;
  amount: number;
}

export interface MaintenanceExpense {
  category: string;
  amount: number;
}

export interface SafetyTrainingExpense {
  category: string;
  amount: number;
}

export interface ModelInputs {
  // Revenue Inputs
  wcTrips: number;
  ambTrips: number;
  wcCostPerTrip: number;
  ambCostPerTrip: number;
  wcAdditionalMiles: number;
  ambAdditionalMiles: number;
  wcCostPerMile: number;
  ambCostPerMile: number;
  wcCancellations: number;
  ambCancellations: number;
  waitTimeQty: number;
  waitTimePrice: number;

  // Driver Staffing Inputs
  baseHourlyRate: number;
  overtimePercent: number;
  regularHoursPercent: number;

  // Payroll Based Expenses
  payrollTaxesFica: number;
  otherPayrollTaxes: number;
  otherBenefitsRate: number;
  workersCompRate: number;

  // Operations Staffing Inputs
  operationsFTEs: OperationFTE[];

  // Insurance Inputs
  vanWcInsurancePerVehicle: number;
  roadSupervisionInsurancePerVehicle: number;
  spareWcVanInsurance: number;

  // Fleet Mix
  numberOfVansWc: number;
  numberOfSedans: number;
  numberOfServiceTrucks: number;

  // Operating Expenses
  operatingExpenses: OperatingExpense[];

  // Maintenance Costs
  maintenanceExpenses: MaintenanceExpense[];

  // Safety & Training
  safetyTrainingExpenses: SafetyTrainingExpense[];

  // Depreciation/Amortization
  depreciationAmortization: number;

  // Administrative Expenses
  administrativeExpenses: number;

  // Interest Expense
  interestExpense: number;

  // Other Fixed Expenses
  annualRent: number;
  annualUtilities: number;
  annualFacilityMaintenance: number;

  // Target and Tax Rates
  targetProfitMargin: number;
  estimatedTaxRate: number;

  // Additional
  revenueHours: number;
}

export interface PricingModelResults {
  // Revenue
  wcBaseRevenue: number;
  ambBaseRevenue: number;
  wcAdditionalMileRevenue: number;
  ambAdditionalMileRevenue: number;
  waitTimeRevenue: number;
  wcCancellationRevenue: number;
  ambCancellationRevenue: number;
  cancellationRevenue: number;
  totalRevenue: number;

  // Expenses
  driverWages: number;
  driverPBEs: number;
  totalDriverStaffing: number;

  operationsWages: number;
  operationsPBEs: number;
  totalOperationsStaffing: number;

  vehicleInsurance: number;
  operatingExpensesTotal: number;
  maintenanceCosts: number;
  safetyTrainingExpenses: number;
  depreciationAmortization: number;
  administrativeExpenses: number;
  totalFixedExpenses: number;
  totalExpenses: number;

  // Financial Metrics
  ebitda: number;
  ebit: number;
  ebt: number;
  netIncome: number;

  // Suggested Pricing
  suggestedWcBasePrice: number;
  suggestedAmbBasePrice: number;
  suggestedWcAdditionalMilePrice: number;
  suggestedAmbAdditionalMilePrice: number;
  suggestedWaitTimePrice: number;
  suggestedWcCancelRate: number;
  suggestedAmbCancelRate: number;

  // Vehicle and Labor Details
  totalVehicles: number;
  annualDepreciation: number;
  totalDriverHours: number; // Add this line
  regularHoursWages: number; // Add this line
  overtimeHoursWages: number; // Add this line
}
