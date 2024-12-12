"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePricingModel = calculatePricingModel;
function calculatePricingModel(inputs) {
    // This is a simplified version of the calculations. You'll need to implement the full logic here.
    const totalTrips = inputs.wcTrips + inputs.ambTrips;
    const estimatedHoursPerTrip = 1; // Assume 1 hour per trip, adjust as needed
    const totalDriverHours = totalTrips * estimatedHoursPerTrip;
    const regularHoursWages = totalDriverHours * inputs.regularHoursPercent * inputs.baseHourlyRate;
    const overtimeHoursWages = totalDriverHours * inputs.overtimeHoursPercent * inputs.baseHourlyRate * 1.5;
    const totalDriverWages = regularHoursWages + overtimeHoursWages;
    const totalMiles = inputs.wcTrips * 20 + inputs.ambTrips * 20 + inputs.wcAdditionalMiles + inputs.ambAdditionalMiles;
    const totalFuelCost = (totalMiles / inputs.estimatedMpg) * inputs.fuelCostPerGallon;
    const totalInsuranceCost = (inputs.numberOfWcVans + inputs.numberOfAmbSedans) * inputs.vanWcInsurancePerVehicle +
        inputs.numberOfRoadSupervisionVehicles * inputs.roadSupervisionInsurancePerVehicle;
    const totalMaintenanceCost = totalMiles * inputs.maintenanceCostPerMile;
    const directCosts = totalDriverWages + totalFuelCost + totalInsuranceCost + totalMaintenanceCost;
    // Simplified indirect costs calculation
    const indirectCosts = inputs.annualRent + inputs.annualUtilities + inputs.annualFacilityMaintenance + inputs.administrativeExpenses;
    const totalCosts = directCosts + indirectCosts;
    const requiredRevenue = totalCosts / (1 - inputs.targetProfitMargin);
    const wcBasePrice = (requiredRevenue * (inputs.wcTrips / totalTrips)) / inputs.wcTrips;
    const ambBasePrice = (requiredRevenue * (inputs.ambTrips / totalTrips)) / inputs.ambTrips;
    const wcAdditionalMilePrice = inputs.wcCostPerMile * (1 + inputs.targetProfitMargin);
    const ambAdditionalMilePrice = inputs.ambCostPerMile * (1 + inputs.targetProfitMargin);
    const waitTimePrice = inputs.baseHourlyRate * (1 + inputs.targetProfitMargin) / 4; // per 15 min
    const wcCancelRate = wcBasePrice * 0.5; // Assume 50% of base price for cancellation
    const ambCancelRate = ambBasePrice * 0.5; // Assume 50% of base price for cancellation
    const totalRevenue = requiredRevenue; // Simplified calculation
    const ebitda = totalRevenue - directCosts - indirectCosts;
    const ebit = ebitda - inputs.depreciation;
    const ebt = ebit - inputs.interestExpense;
    const netIncome = ebt * (1 - inputs.estimatedTaxRate);
    return {
        totalRevenue,
        directCosts,
        indirectCosts,
        ebitda,
        ebit,
        ebt,
        netIncome,
        suggestedWcBasePrice: wcBasePrice,
        suggestedAmbBasePrice: ambBasePrice,
        suggestedWcAdditionalMilePrice: wcAdditionalMilePrice,
        suggestedAmbAdditionalMilePrice: ambAdditionalMilePrice,
        suggestedWaitTimePrice: waitTimePrice,
        suggestedWcCancelRate: wcCancelRate,
        suggestedAmbCancelRate: ambCancelRate,
    };
}
