// utils.ts

import { ModelInputs, PricingModelResults } from './types';

export function calculatePricingModel(inputs: ModelInputs): PricingModelResults {
  // === Error Handling ===
  if (inputs.wcTrips <= 0 || inputs.ambTrips <= 0) {
    throw new Error('Trip counts must be greater than zero');
  }

  // === Revenue Calculations ===
  const wcBaseRevenue = inputs.wcTrips * inputs.wcCostPerTrip;
  const ambBaseRevenue = inputs.ambTrips * inputs.ambCostPerTrip;
  const wcAdditionalMileRevenue = inputs.wcAdditionalMiles * inputs.wcCostPerMile;
  const ambAdditionalMileRevenue = inputs.ambAdditionalMiles * inputs.ambCostPerMile;
  const waitTimeRevenue = inputs.waitTimeQty * inputs.waitTimePrice;

  const wcCancellationRevenue = inputs.wcCancellations * inputs.wcCostPerTrip;
  const ambCancellationRevenue = inputs.ambCancellations * inputs.ambCostPerTrip;
  const cancellationRevenue = wcCancellationRevenue + ambCancellationRevenue;

  const totalRevenue =
    wcBaseRevenue +
    ambBaseRevenue +
    wcAdditionalMileRevenue +
    ambAdditionalMileRevenue +
    waitTimeRevenue +
    cancellationRevenue;

  // === Driver Staffing Calculations ===
  const baseHourlyRate = inputs.baseHourlyRate;
  const overtimePercent = inputs.overtimePercent;
  const regularHoursPercent = inputs.regularHoursPercent;
  const estimatedTripsPerHour = 1.25;

  // Estimated Revenue Hours
  const estimatedRevenueHoursWc = inputs.wcTrips / estimatedTripsPerHour;
  const estimatedRevenueHoursAmb = inputs.ambTrips / estimatedTripsPerHour;
  const totalEstimatedRevenueHours = estimatedRevenueHoursWc + estimatedRevenueHoursAmb;

  // Deadhead Hours
  const estimatedDeadheadHours = totalEstimatedRevenueHours * 0.15; // Assuming 15% deadhead
  const subtotalEstimatedOperatingHours = totalEstimatedRevenueHours + estimatedDeadheadHours;

  // In-House Times
  const inHouseTimePrePost = subtotalEstimatedOperatingHours * 0.06; // Assuming 6% for pre & post trips
  const inHouseTimeTraining = subtotalEstimatedOperatingHours * 0.01; // Assuming 1% for training
  const vacationSickOtherTime = subtotalEstimatedOperatingHours * 0.04; // Assuming 4% for vacation/sick
  const holidayTime = subtotalEstimatedOperatingHours * 0.027; // Assuming 2.7% for holidays

  // Total Estimated Driver Hours
  const totalEstimatedDriverHours =
    subtotalEstimatedOperatingHours +
    inHouseTimePrePost +
    inHouseTimeTraining +
    vacationSickOtherTime +
    holidayTime;

  // Calculate Wages
  const regularHoursWages = totalEstimatedDriverHours * regularHoursPercent * baseHourlyRate;
  const overtimeHoursWages = totalEstimatedDriverHours * overtimePercent * baseHourlyRate * 1.5;

  const totalDriverWages = regularHoursWages + overtimeHoursWages;

  // Payroll Based Expenses for Drivers
  const driverPayrollTaxesFICA = totalDriverWages * inputs.payrollTaxesFica;
  const driverPayrollTaxesOther = totalDriverWages * inputs.otherPayrollTaxes;
  const driverOtherBenefits = totalDriverWages * inputs.otherBenefitsRate;
  const driverWorkersComp = totalDriverWages * inputs.workersCompRate;

  const totalDriverPBEs =
    driverPayrollTaxesFICA +
    driverPayrollTaxesOther +
    driverOtherBenefits +
    driverWorkersComp;

  const totalDriverStaffing = totalDriverWages + totalDriverPBEs;

  // --- Operations Staffing Calculations ---
  const operationsFTEs = inputs.operationsFTEs;
  const operationsWages = operationsFTEs.reduce(
    (acc, fte) => acc + fte.annualWage * fte.count,
    0
  );

  const operationsPayrollTaxesFICA = operationsWages * inputs.payrollTaxesFica;
  const operationsPayrollTaxesOther = operationsWages * inputs.otherPayrollTaxes;
  const operationsOtherBenefits = operationsWages * inputs.otherBenefitsRate;
  const operationsWorkersComp = operationsWages * inputs.workersCompRate;

  const totalOperationsPBEs =
    operationsPayrollTaxesFICA +
    operationsPayrollTaxesOther +
    operationsOtherBenefits +
    operationsWorkersComp;

  const totalOperationsStaffing = operationsWages + totalOperationsPBEs;

  // --- Insurance Expenses ---
  const totalVehicles =
    inputs.numberOfVansWc + inputs.numberOfSedans + inputs.numberOfServiceTrucks;
  const vehicleInsurance =
    inputs.vanWcInsurancePerVehicle * inputs.numberOfVansWc +
    inputs.roadSupervisionInsurancePerVehicle * inputs.numberOfSedans +
    inputs.spareWcVanInsurance * inputs.numberOfServiceTrucks;

  // --- Operating Expenses ---
  const operatingExpensesTotal = inputs.operatingExpenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  // --- Maintenance Costs ---
  const maintenanceCosts = inputs.maintenanceExpenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  // --- Safety & Training Expenses ---
  const safetyTrainingExpensesTotal = inputs.safetyTrainingExpenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  // --- Depreciation/Amortization ---
  const depreciationAmortization = inputs.depreciationAmortization;

  // --- Administrative Expenses ---
  const administrativeExpenses = inputs.administrativeExpenses;

  // --- Fixed Expenses ---
  const fixedExpenses =
    inputs.annualRent + inputs.annualUtilities + inputs.annualFacilityMaintenance;

  // --- Total Expenses ---
  const totalExpenses =
    totalDriverStaffing +
    totalOperationsStaffing +
    vehicleInsurance +
    operatingExpensesTotal +
    maintenanceCosts +
    safetyTrainingExpensesTotal +
    depreciationAmortization +
    administrativeExpenses +
    fixedExpenses;

  // === Financial Metrics ===
  const ebitda = totalRevenue - (totalExpenses - depreciationAmortization);
  const ebit = ebitda - depreciationAmortization;
  const ebt = ebit - inputs.interestExpense;
  const netIncome = ebt * (1 - inputs.estimatedTaxRate);

  // === Suggested Pricing ===
  const suggestedWcBasePrice = inputs.wcCostPerTrip;
  const suggestedAmbBasePrice = inputs.ambCostPerTrip;
  const suggestedWcAdditionalMilePrice = inputs.wcCostPerMile;
  const suggestedAmbAdditionalMilePrice = inputs.ambCostPerMile;
  const suggestedWaitTimePrice = inputs.waitTimePrice;
  const suggestedWcCancelRate = inputs.wcCostPerTrip;
  const suggestedAmbCancelRate = inputs.ambCostPerTrip;

  return {
    // Revenue
    wcBaseRevenue,
    ambBaseRevenue,
    wcAdditionalMileRevenue,
    ambAdditionalMileRevenue,
    waitTimeRevenue,
    wcCancellationRevenue,
    ambCancellationRevenue,
    cancellationRevenue,
    totalRevenue,

    // Expenses
    driverWages: totalDriverWages,
    driverPBEs: totalDriverPBEs,
    totalDriverStaffing,
    operationsWages,
    operationsPBEs: totalOperationsPBEs,
    totalOperationsStaffing,
    vehicleInsurance,
    operatingExpensesTotal,
    maintenanceCosts,
    safetyTrainingExpenses: safetyTrainingExpensesTotal,
    depreciationAmortization,
    administrativeExpenses,
    totalFixedExpenses: fixedExpenses,
    totalExpenses,

    // Financial Metrics
    ebitda,
    ebit,
    ebt,
    netIncome,

    // Suggested Pricing
    suggestedWcBasePrice,
    suggestedAmbBasePrice,
    suggestedWcAdditionalMilePrice,
    suggestedAmbAdditionalMilePrice,
    suggestedWaitTimePrice,
    suggestedWcCancelRate,
    suggestedAmbCancelRate,

    // Vehicle and Labor Details
    totalVehicles,
    annualDepreciation: depreciationAmortization,
    totalDriverHours: totalEstimatedDriverHours, // Ensure this variable is returned
    regularHoursWages,
    overtimeHoursWages,
  };
}
