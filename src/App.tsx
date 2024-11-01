import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import TripForm from './components/TripForm';
import CostSummary from './components/CostSummary';
import { calculateTotalCost } from './utils/calculations';

export type TripDetails = {
  adults: number;
  kids: number;
  nights: number;
  meals: number;
  transportDays: number;
  attractions: {
    osborneHouse: number;
    carisbrookeCastle: number;
    ventnorBotanic: number;
    robinHill: number;
    steamRailway: number;
  };
};

const initialTripDetails: TripDetails = {
  adults: 0,
  kids: 0,
  nights: 0,
  meals: 0,
  transportDays: 0,
  attractions: {
    osborneHouse: 0,
    carisbrookeCastle: 0,
    ventnorBotanic: 0,
    robinHill: 0,
    steamRailway: 0
  }
};

function App() {
  const [tripDetails, setTripDetails] = useState<TripDetails>(initialTripDetails);
  const totalCost = calculateTotalCost(tripDetails);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4 md:p-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Calculator className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-blue-900">Isle of Wight Trip Calculator</h1>
          </div>
          <p className="text-blue-600">Plan your perfect island getaway</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <TripForm tripDetails={tripDetails} setTripDetails={setTripDetails} />
          <CostSummary tripDetails={tripDetails} totalCost={totalCost} />
        </div>
      </div>
    </div>
  );
}

export default App;