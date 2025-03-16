import React, { useState, useEffect } from 'react';
import { Calculator, Download, RefreshCw, TrendingUp, DollarSign, Clock } from 'lucide-react';
import BrandedButton from './BrandedButton';

interface CalculationResult {
  annualSavings: number;
  fiveYearSavings: number;
  roi: number;
  paybackPeriod: number;
}

const ROICalculator: React.FC = () => {
  const [fleetSize, setFleetSize] = useState<number>(10);
  const [serviceArea, setServiceArea] = useState<number>(50);
  const [annualRidership, setAnnualRidership] = useState<number>(50000);
  const [currentCostPerTrip, setCurrentCostPerTrip] = useState<number>(35);
  const [results, setResults] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'calculator' | 'results'>(results ? 'results' : 'calculator');

  // Update range input background based on value
  useEffect(() => {
    const updateRangeBackground = (input: HTMLInputElement, min: number, max: number) => {
      if (!input) return;
      const value = parseInt(input.value);
      const percentage = ((value - min) / (max - min)) * 100;
      input.style.backgroundSize = `${percentage}% 100%`;
    };

    const fleetSizeInput = document.getElementById('fleet-size') as HTMLInputElement;
    const serviceAreaInput = document.getElementById('service-area') as HTMLInputElement;
    const ridershipInput = document.getElementById('ridership') as HTMLInputElement;
    const costPerTripInput = document.getElementById('cost-per-trip') as HTMLInputElement;

    if (fleetSizeInput) updateRangeBackground(fleetSizeInput, 1, 100);
    if (serviceAreaInput) updateRangeBackground(serviceAreaInput, 5, 500);
    if (ridershipInput) updateRangeBackground(ridershipInput, 1000, 500000);
    if (costPerTripInput) updateRangeBackground(costPerTripInput, 10, 100);
  }, [fleetSize, serviceArea, annualRidership, currentCostPerTrip]);

  const calculateROI = () => {
    setIsCalculating(true);
    
    // Simulate calculation delay
    setTimeout(() => {
      // Estimated cost reduction with DemandTrans (30% average)
      const newCostPerTrip = currentCostPerTrip * 0.7;
      const costSavingsPerTrip = currentCostPerTrip - newCostPerTrip;
      
      // Annual savings
      const annualSavings = costSavingsPerTrip * annualRidership;
      
      // 5-year savings
      const fiveYearSavings = annualSavings * 5;
      
      // Estimated implementation cost based on fleet size
      const implementationCost = 25000 + (fleetSize * 2000);
      
      // ROI calculation (5-year)
      const roi = (fiveYearSavings - implementationCost) / implementationCost * 100;
      
      // Payback period in months
      const paybackPeriod = (implementationCost / annualSavings) * 12;
      
      setResults({
        annualSavings,
        fiveYearSavings,
        roi,
        paybackPeriod
      });
      
      setIsCalculating(false);
      setActiveTab('results');
    }, 1500);
  };

  const resetCalculator = () => {
    setFleetSize(10);
    setServiceArea(50);
    setAnnualRidership(50000);
    setCurrentCostPerTrip(35);
    setResults(null);
    setActiveTab('calculator');
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  useEffect(() => {
    // Reset results when inputs change
    if (results) {
      setResults(null);
    }
  }, [fleetSize, serviceArea, annualRidership, currentCostPerTrip]);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-enterprise-primary to-enterprise-accent p-6 text-white">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <Calculator className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold">Transit ROI Calculator</h3>
        </div>
      </div>
      
      <div className="p-6 md:p-10">
        <p className="text-gray-600 mb-10 text-lg">
          Estimate your potential cost savings and return on investment with DemandTrans solutions.
        </p>
        
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'calculator' ? 'text-enterprise-accent border-b-2 border-enterprise-accent' : 'text-gray-500 hover:text-enterprise-primary'}`}
            onClick={() => setActiveTab('calculator')}
          >
            Calculator
          </button>
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'results' && results ? 'text-enterprise-accent border-b-2 border-enterprise-accent' : 'text-gray-500 hover:text-enterprise-primary'}`}
            onClick={() => results && setActiveTab('results')}
            disabled={!results}
          >
            Results
          </button>
        </div>
        
        {activeTab === 'calculator' && (
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="space-y-8">
                <div>
                  <label className="form-label flex justify-between">
                    <span>Fleet Size (vehicles)</span>
                    <span className="text-enterprise-accent font-semibold">{fleetSize}</span>
                  </label>
                  <input
                    id="fleet-size"
                    type="range"
                    min="1"
                    max="100"
                    value={fleetSize}
                    onChange={(e) => setFleetSize(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus-ring"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-500">1</span>
                    <span className="text-xs text-gray-500">100</span>
                  </div>
                </div>
                
                <div>
                  <label className="form-label flex justify-between">
                    <span>Service Area (sq miles)</span>
                    <span className="text-enterprise-accent font-semibold">{serviceArea}</span>
                  </label>
                  <input
                    id="service-area"
                    type="range"
                    min="5"
                    max="500"
                    step="5"
                    value={serviceArea}
                    onChange={(e) => setServiceArea(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus-ring"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-500">5</span>
                    <span className="text-xs text-gray-500">500</span>
                  </div>
                </div>
                
                <div>
                  <label className="form-label flex justify-between">
                    <span>Annual Ridership</span>
                    <span className="text-enterprise-accent font-semibold">{annualRidership.toLocaleString()}</span>
                  </label>
                  <input
                    id="ridership"
                    type="range"
                    min="1000"
                    max="500000"
                    step="1000"
                    value={annualRidership}
                    onChange={(e) => setAnnualRidership(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus-ring"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-500">1K</span>
                    <span className="text-xs text-gray-500">500K</span>
                  </div>
                </div>
                
                <div>
                  <label className="form-label flex justify-between">
                    <span>Current Cost Per Trip</span>
                    <span className="text-enterprise-accent font-semibold">${currentCostPerTrip}</span>
                  </label>
                  <input
                    id="cost-per-trip"
                    type="range"
                    min="10"
                    max="100"
                    value={currentCostPerTrip}
                    onChange={(e) => setCurrentCostPerTrip(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus-ring"
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-xs text-gray-500">$10</span>
                    <span className="text-xs text-gray-500">$100</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <BrandedButton 
                  variant="accent" 
                  className="w-full py-4 flex items-center justify-center gap-2"
                  onClick={calculateROI}
                >
                  {isCalculating ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                      Calculating...
                    </>
                  ) : (
                    <>
                      Calculate ROI <Calculator className="w-5 h-5" />
                    </>
                  )}
                </BrandedButton>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-lg font-semibold mb-6 text-enterprise-primary">How We Calculate ROI</h4>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-enterprise-accent/10 flex items-center justify-center text-enterprise-accent">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <h5 className="font-medium">Cost Savings</h5>
                  </div>
                  <p className="text-gray-600 text-sm">
                    We estimate a 30% reduction in cost per trip based on average client results, applied to your annual ridership.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-enterprise-accent/10 flex items-center justify-center text-enterprise-accent">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <h5 className="font-medium">Return on Investment</h5>
                  </div>
                  <p className="text-gray-600 text-sm">
                    ROI is calculated over a 5-year period, comparing total savings to implementation costs.
                  </p>
                </div>
                
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-enterprise-accent/10 flex items-center justify-center text-enterprise-accent">
                      <Clock className="w-4 h-4" />
                    </div>
                    <h5 className="font-medium">Payback Period</h5>
                  </div>
                  <p className="text-gray-600 text-sm">
                    The time required to recover your initial investment, calculated in months.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500 italic">
                  Note: This calculator provides estimates based on industry averages. Contact us for a detailed analysis specific to your operations.
                </p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'results' && results && (
          <div>
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-4 text-enterprise-primary">Annual Savings</h4>
                <p className="text-3xl font-bold text-enterprise-accent mb-2">
                  {formatCurrency(results.annualSavings)}
                </p>
                <p className="text-gray-600">
                  Estimated annual cost reduction based on your inputs
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-4 text-enterprise-primary">5-Year Savings</h4>
                <p className="text-3xl font-bold text-enterprise-accent mb-2">
                  {formatCurrency(results.fiveYearSavings)}
                </p>
                <p className="text-gray-600">
                  Projected savings over a 5-year period
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-4 text-enterprise-primary">ROI (5-Year)</h4>
                <p className="text-3xl font-bold text-enterprise-accent mb-2">
                  {results.roi.toFixed(1)}%
                </p>
                <p className="text-gray-600">
                  Return on investment over 5 years
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-4 text-enterprise-primary">Payback Period</h4>
                <p className="text-3xl font-bold text-enterprise-accent mb-2">
                  {results.paybackPeriod.toFixed(1)} months
                </p>
                <p className="text-gray-600">
                  Time to recover your investment
                </p>
              </div>
            </div>
            
            <div className="bg-enterprise-primary/5 p-6 rounded-xl mb-10">
              <h4 className="text-lg font-semibold mb-4 text-enterprise-primary">Summary</h4>
              <p className="text-gray-700 mb-4">
                Based on your inputs, implementing DemandTrans solutions could save your agency approximately <strong>{formatCurrency(results.annualSavings)}</strong> per year, with a total 5-year savings of <strong>{formatCurrency(results.fiveYearSavings)}</strong>.
              </p>
              <p className="text-gray-700">
                Your investment would be recovered in <strong>{results.paybackPeriod.toFixed(1)} months</strong>, with a 5-year ROI of <strong>{results.roi.toFixed(1)}%</strong>.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <BrandedButton 
                variant="primary" 
                className="flex items-center gap-2"
                onClick={() => setActiveTab('calculator')}
              >
                <RefreshCw className="w-4 h-4" /> Adjust Parameters
              </BrandedButton>
              
              <BrandedButton 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={resetCalculator}
              >
                Reset Calculator
              </BrandedButton>
              
              <BrandedButton 
                variant="accent" 
                className="flex items-center gap-2 ml-auto"
              >
                <Download className="w-4 h-4" /> Download Report
              </BrandedButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ROICalculator;