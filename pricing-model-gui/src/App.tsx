import React, { useState } from 'react';
import { ModelInputs, OperationFTE, PricingModelResults } from './types';
import { calculatePricingModel } from './utils';
import './tailwind.css'; // This line is correct

const defaultInputs: ModelInputs = {
  // Revenue Inputs
  wcTrips: 6555,
  ambTrips: 9000,
  wcCostPerTrip: 95.00,
  ambCostPerTrip: 70.00,
  wcAdditionalMiles: 7325,
  ambAdditionalMiles: 100074,
  wcCostPerMile: 4.00,
  ambCostPerMile: 3.00,
  wcCancellations: 70,
  ambCancellations: 90,
  waitTimeQty: 100,
  waitTimePrice: 30.00,

  // Driver Staffing Inputs
  baseHourlyRate: 18.00,
  overtimePercent: 0.12,
  regularHoursPercent: 0.88,

  // Payroll Based Expenses
  payrollTaxesFica: 0.0765,
  otherPayrollTaxes: 0.0765,
  otherBenefitsRate: 0.035,
  workersCompRate: 0.0525,

  // Operations Staffing Inputs
  operationsFTEs: [
    { role: 'Manager 1', count: 1, annualWage: 80000 },
    { role: 'Manager 2', count: 1, annualWage: 80000 },
    { role: 'Dispatcher 1', count: 1, annualWage: 50000 },
    { role: 'Dispatcher 2', count: 1, annualWage: 50000 },
    { role: 'Office Admin', count: 1, annualWage: 40000 },
    { role: 'Office Admin VA', count: 1, annualWage: 25000 },
    { role: 'VA2', count: 1, annualWage: 25000 },
    { role: 'VA3', count: 1, annualWage: 25000 },
  ],

  // Insurance Inputs
  vanWcInsurancePerVehicle: 14000,
  roadSupervisionInsurancePerVehicle: 4000,
  spareWcVanInsurance: 14000,

  // Fleet Mix
  numberOfVansWc: 10,
  numberOfSedans: 1,
  numberOfServiceTrucks: 1,

  // Operating Expenses
  operatingExpenses: [
    { category: 'Licenses & Permits', amount: 5000 },
    { category: 'Uniforms', amount: 6000 },
    { category: 'PTT Costs', amount: 2880 },
    { category: 'Software Charges', amount: 7200 },
    { category: 'Other Operating', amount: 360 },
  ],

  // Maintenance Costs
  maintenanceExpenses: [
    { category: 'Driver Safety Program', amount: 420 },
    { category: 'Maintenance Supplies', amount: 19200 },
    { category: 'Small Tools & Repairs', amount: 18000 },
    { category: 'Washing', amount: 4560 },
    { category: 'Oil & Lube', amount: 7200 },
    { category: 'Other Maintenance', amount: 6840 },
  ],

  // Safety & Training
  safetyTrainingExpenses: [
    { category: 'Recruiting', amount: 25000 },
  ],

  // Depreciation/Amortization
  depreciationAmortization: 278367,

  // Administrative Expenses
  administrativeExpenses: 4750,

  // Interest Expense
  interestExpense: 76920,

  // Other Fixed Expenses
  annualRent: 0,
  annualUtilities: 0,
  annualFacilityMaintenance: 0,

  // Target and Tax Rates
  targetProfitMargin: 0.10,
  estimatedTaxRate: 0.21,

  // Additional
  revenueHours: 17194,
};

export default function App() {
  const [inputs, setInputs] = useState(defaultInputs);
  const [results, setResults] = useState<PricingModelResults | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]:
        name === 'waitTimePrice' ||
        name === 'baseHourlyRate' ||
        name === 'otherBenefitsRate' ||
        name === 'workersCompRate' ||
        name === 'overtimePercent' ||
        name === 'payrollTaxesFica' ||
        name === 'otherPayrollTaxes' ||
        name === 'regularHoursPercent'
          ? parseFloat(value)
          : parseInt(value, 10),
    }));
  };

  const handleFteChange = (
    index: number,
    field: keyof OperationFTE,
    value: string
  ) => {
    const updatedFTEs = [...inputs.operationsFTEs];
    if (field === 'annualWage' || field === 'count') {
      updatedFTEs[index][field] = parseFloat(value);
    } else {
      updatedFTEs[index][field] = value as any;
    }
    setInputs(prev => ({ ...prev, operationsFTEs: updatedFTEs }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const modelResults = calculatePricingModel(inputs);
    setResults(modelResults);
  };

  const formatCurrency = (value: number) =>
    `$${value.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  return (
    <div className="bg-custom min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h1 className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem] text-center">
          VA Transportation Service Pricing Model
        </h1>
        <form onSubmit={handleSubmit} className="mb-8">
          {/* Revenue Inputs */}
          <h2 className="text-xl font-semibold mb-4">Revenue Inputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="wcTrips" className="block text-sm font-medium text-gray-700">WC Trips</label>
              <input
                type="number"
                id="wcTrips"
                name="wcTrips"
                value={inputs.wcTrips}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="ambTrips" className="block text-sm font-medium text-gray-700">AMB Trips</label>
              <input
                type="number"
                id="ambTrips"
                name="ambTrips"
                value={inputs.ambTrips}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="wcCostPerTrip" className="block text-sm font-medium text-gray-700">WC Cost Per Trip ($)</label>
              <input
                type="number"
                id="wcCostPerTrip"
                name="wcCostPerTrip"
                value={inputs.wcCostPerTrip}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                step="0.01"
              />
            </div>
            <div>
              <label htmlFor="ambCostPerTrip" className="block text-sm font-medium text-gray-700">AMB Cost Per Trip ($)</label>
              <input
                type="number"
                id="ambCostPerTrip"
                name="ambCostPerTrip"
                value={inputs.ambCostPerTrip}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                step="0.01"
              />
            </div>
            <div>
              <label htmlFor="wcAdditionalMiles" className="block text-sm font-medium text-gray-700">WC Additional Miles</label>
              <input
                type="number"
                id="wcAdditionalMiles"
                name="wcAdditionalMiles"
                value={inputs.wcAdditionalMiles}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="ambAdditionalMiles" className="block text-sm font-medium text-gray-700">AMB Additional Miles</label>
              <input
                type="number"
                id="ambAdditionalMiles"
                name="ambAdditionalMiles"
                value={inputs.ambAdditionalMiles}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="wcCostPerMile" className="block text-sm font-medium text-gray-700">WC Cost Per Mile ($)</label>
              <input
                type="number"
                id="wcCostPerMile"
                name="wcCostPerMile"
                value={inputs.wcCostPerMile}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                step="0.01"
              />
            </div>
            <div>
              <label htmlFor="ambCostPerMile" className="block text-sm font-medium text-gray-700">AMB Cost Per Mile ($)</label>
              <input
                type="number"
                id="ambCostPerMile"
                name="ambCostPerMile"
                value={inputs.ambCostPerMile}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                step="0.01"
              />
            </div>
            <div>
              <label htmlFor="wcCancellations" className="block text-sm font-medium text-gray-700">WC Cancellations Qty</label>
              <input
                type="number"
                id="wcCancellations"
                name="wcCancellations"
                value={inputs.wcCancellations}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="ambCancellations" className="block text-sm font-medium text-gray-700">AMB Cancellations Qty</label>
              <input
                type="number"
                id="ambCancellations"
                name="ambCancellations"
                value={inputs.ambCancellations}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="waitTimeQty" className="block text-sm font-medium text-gray-700">Wait Time Qty</label>
              <input
                type="number"
                id="waitTimeQty"
                name="waitTimeQty"
                value={inputs.waitTimeQty}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <label htmlFor="waitTimePrice" className="block text-sm font-medium text-gray-700">Wait Time Price (per 15 min) ($)</label>
              <input
                type="number"
                id="waitTimePrice"
                name="waitTimePrice"
                value={inputs.waitTimePrice}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                step="0.01"
              />
            </div>
          </div>

          {/* Driver Staffing Inputs */}
          <h2 className="text-xl font-semibold mb-4">Driver Staffing Inputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label htmlFor="baseHourlyRate" className="block text-sm font-medium text-gray-700">Base Hourly Rate ($)</label>
              <input
                type="number"
                id="baseHourlyRate"
                name="baseHourlyRate"
                value={inputs.baseHourlyRate}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                step="0.01"
              />
            </div>
            <div>
              <label htmlFor="overtimePercent" className="block text-sm font-medium text-gray-700">Overtime Percent (%)</label>
              <input
                type="number"
                id="overtimePercent"
                name="overtimePercent"
                value={inputs.overtimePercent * 100}
                onChange={(e) =>
                  setInputs(prev => ({
                    ...prev,
                    overtimePercent: parseFloat(e.target.value) / 100,
                  }))
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                step="0.01"
              />
            </div>
            <div>
              <label htmlFor="regularHoursPercent" className="block text-sm font-medium text-gray-700">Regular Hours Percent (%)</label>
              <input
                type="number"
                id="regularHoursPercent"
                name="regularHoursPercent"
                value={inputs.regularHoursPercent * 100}
                onChange={(e) =>
                  setInputs(prev => ({
                    ...prev,
                    regularHoursPercent: parseFloat(e.target.value) / 100,
                  }))
                }
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                step="0.01"
              />
            </div>
          </div>

          {/* Operations Staffing Inputs */}
          <h2 className="text-xl font-semibold mb-4">Operations Staffing Inputs</h2>
          {inputs.operationsFTEs.map((fte, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <input
                  type="text"
                  value={fte.role}
                  onChange={(e) => handleFteChange(index, 'role', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Count</label>
                <input
                  type="number"
                  value={fte.count}
                  onChange={(e) => handleFteChange(index, 'count', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Annual Wage ($)</label>
                <input
                  type="number"
                  value={fte.annualWage}
                  onChange={(e) => handleFteChange(index, 'annualWage', e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                  step="0.01"
                />
              </div>
            </div>
          ))}
          
          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            >
              Calculate Results
            </button>
          </div>
        </form>

        {/* Display Results */}
        {results && (
          <div>
            {/* Revenue Breakdown */}
            <h2 className="text-xl font-semibold mb-2">Revenue Breakdown</h2>
            <table className="min-w-full divide-y divide-gray-200 mb-4">
              <tbody>
                <tr>
                  <td className="py-2">WC Base Revenue</td>
                  <td className="text-right py-2">{formatCurrency(results.wcBaseRevenue)}</td>
                </tr>
                <tr>
                  <td className="py-2">AMB Base Revenue</td>
                  <td className="text-right py-2">{formatCurrency(results.ambBaseRevenue)}</td>
                </tr>
                <tr>
                  <td className="py-2">WC Additional Mile Revenue</td>
                  <td className="text-right py-2">{formatCurrency(results.wcAdditionalMileRevenue)}</td>
                </tr>
                <tr>
                  <td className="py-2">AMB Additional Mile Revenue</td>
                  <td className="text-right py-2">{formatCurrency(results.ambAdditionalMileRevenue)}</td>
                </tr>
                <tr>
                  <td className="py-2">Wait Time Revenue</td>
                  <td className="text-right py-2">{formatCurrency(results.waitTimeRevenue)}</td>
                </tr>
                <tr>
                  <td className="py-2">WC Cancellation Revenue</td>
                  <td className="text-right py-2">{formatCurrency(results.wcCancellationRevenue)}</td>
                </tr>
                <tr>
                  <td className="py-2">AMB Cancellation Revenue</td>
                  <td className="text-right py-2">{formatCurrency(results.ambCancellationRevenue)}</td>
                </tr>
                <tr className="font-bold">
                  <td className="py-2">Total Revenue</td>
                  <td className="text-right py-2">{formatCurrency(results.totalRevenue)}</td>
                </tr>
              </tbody>
            </table>

            {/* Expense Breakdown */}
            <h2 className="text-xl font-semibold mb-2">Expense Breakdown</h2>
            <table className="min-w-full divide-y divide-gray-200 mb-4">
              <tbody>
                <tr>
                  <td className="py-2">Driver Wages</td>
                  <td className="text-right py-2">{formatCurrency(results.driverWages)}</td>
                </tr>
                <tr>
                  <td className="py-2">Driver PBEs</td>
                  <td className="text-right py-2">{formatCurrency(results.driverPBEs)}</td>
                </tr>
                <tr>
                  <td className="py-2">Total Driver Staffing</td>
                  <td className="text-right py-2">{formatCurrency(results.totalDriverStaffing)}</td>
                </tr>
                <tr>
                  <td className="py-2">Operations Wages</td>
                  <td className="text-right py-2">{formatCurrency(results.operationsWages)}</td>
                </tr>
                <tr>
                  <td className="py-2">Operations PBEs</td>
                  <td className="text-right py-2">{formatCurrency(results.operationsPBEs)}</td>
                </tr>
                <tr>
                  <td className="py-2">Total Operations Staffing</td>
                  <td className="text-right py-2">{formatCurrency(results.totalOperationsStaffing)}</td>
                </tr>
                <tr>
                  <td className="py-2">Vehicle Insurance</td>
                  <td className="text-right py-2">{formatCurrency(results.vehicleInsurance)}</td>
                </tr>
                <tr>
                  <td className="py-2">Operating Expenses</td>
                  <td className="text-right py-2">{formatCurrency(results.operatingExpensesTotal)}</td>
                </tr>
                <tr>
                  <td className="py-2">Maintenance Costs</td>
                  <td className="text-right py-2">{formatCurrency(results.maintenanceCosts)}</td>
                </tr>
                <tr>
                  <td className="py-2">Safety & Training Expenses</td>
                  <td className="text-right py-2">{formatCurrency(results.safetyTrainingExpenses)}</td>
                </tr>
                <tr>
                  <td className="py-2">Depreciation/Amortization</td>
                  <td className="text-right py-2">{formatCurrency(results.depreciationAmortization)}</td>
                </tr>
                <tr>
                  <td className="py-2">Administrative Expenses</td>
                  <td className="text-right py-2">{formatCurrency(results.administrativeExpenses)}</td>
                </tr>
                <tr className="font-bold">
                  <td className="py-2">Total Fixed Expenses</td>
                  <td className="text-right py-2">{formatCurrency(results.totalFixedExpenses)}</td>
                </tr>
                <tr className="font-bold">
                  <td className="py-2">Total Expenses</td>
                  <td className="text-right py-2">{formatCurrency(results.totalExpenses)}</td>
                </tr>
              </tbody>
            </table>

            {/* Financial Summary */}
            <h2 className="text-xl font-semibold mb-2">Financial Summary</h2>
            <table className="min-w-full divide-y divide-gray-200 mb-4">
              <tbody>
                <tr>
                  <td className="py-2">EBITDA</td>
                  <td className="text-right py-2">{formatCurrency(results.ebitda)}</td>
                </tr>
                <tr>
                  <td className="py-2">EBIT</td>
                  <td className="text-right py-2">{formatCurrency(results.ebit)}</td>
                </tr>
                <tr>
                  <td className="py-2">EBT</td>
                  <td className="text-right py-2">{formatCurrency(results.ebt)}</td>
                </tr>
                <tr>
                  <td className="py-2">Net Income</td>
                  <td className="text-right py-2">{formatCurrency(results.netIncome)}</td>
                </tr>
              </tbody>
            </table>

            {/* Suggested Pricing */}
            <h2 className="text-xl font-semibold mb-2">Suggested Pricing</h2>
            <table className="min-w-full divide-y divide-gray-200 mb-4">
              <tbody>
                <tr>
                  <td className="py-2">WC Base Price</td>
                  <td className="text-right py-2">{formatCurrency(results.suggestedWcBasePrice)}</td>
                </tr>
                <tr>
                  <td className="py-2">AMB Base Price</td>
                  <td className="text-right py-2">{formatCurrency(results.suggestedAmbBasePrice)}</td>
                </tr>
                <tr>
                  <td className="py-2">WC Additional Mile Price</td>
                  <td className="text-right py-2">{formatCurrency(results.suggestedWcAdditionalMilePrice)}</td>
                </tr>
                <tr>
                  <td className="py-2">AMB Additional Mile Price</td>
                  <td className="text-right py-2">{formatCurrency(results.suggestedAmbAdditionalMilePrice)}</td>
                </tr>
                <tr>
                  <td className="py-2">Wait Time Price (per 15 min)</td>
                  <td className="text-right py-2">{formatCurrency(results.suggestedWaitTimePrice)}</td>
                </tr>
                <tr>
                  <td className="py-2">WC Cancel Rate</td>
                  <td className="text-right py-2">{formatCurrency(results.suggestedWcCancelRate)}</td>
                </tr>
                <tr>
                  <td className="py-2">AMB Cancel Rate</td>
                  <td className="text-right py-2">{formatCurrency(results.suggestedAmbCancelRate)}</td>
                </tr>
              </tbody>
            </table>

            {/* Vehicle and Labor Details */}
            <h2 className="text-xl font-semibold mb-2">Vehicle and Labor Details</h2>
            <table className="min-w-full divide-y divide-gray-200 mb-4">
              <tbody>
                <tr>
                  <td className="py-2">Total Vehicles</td>
                  <td className="text-right py-2">{results.totalVehicles}</td>
                </tr>
                <tr>
                  <td className="py-2">Annual Vehicle Depreciation</td>
                  <td className="text-right py-2">{formatCurrency(results.annualDepreciation)}</td>
                </tr>
                <tr>
                  <td className="py-2">Total Driver Hours</td>
                  <td className="text-right py-2">{results.totalDriverHours.toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="py-2">Regular Hours Wages</td>
                  <td className="text-right py-2">{formatCurrency(results.regularHoursWages)}</td>
                </tr>
                <tr>
                  <td className="py-2">Overtime Hours Wages</td>
                  <td className="text-right py-2">{formatCurrency(results.overtimeHoursWages)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
