import React from 'react';
import { TripDetails } from '../App';
import { calculateBreakdown } from '../utils/calculations';
import { PoundSterling, Bed, UtensilsCrossed, Bus, Landmark } from 'lucide-react';

interface CostSummaryProps {
  tripDetails: TripDetails;
  totalCost: number;
}

const CostSummary: React.FC<CostSummaryProps> = ({ tripDetails, totalCost }) => {
  const breakdown = calculateBreakdown(tripDetails);

  const CostItem = ({ label, amount, icon }: { label: string; amount: number; icon: React.ReactNode }) => (
    <div className="flex justify-between items-center py-2">
      <span className="text-gray-600 flex items-center gap-2">
        {icon}
        {label}
      </span>
      <span className="font-medium">£{amount.toFixed(2)}</span>
    </div>
  );

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-blue-900 flex items-center justify-center gap-2">
          <PoundSterling className="w-6 h-6" />
          Cost Summary
        </h2>
      </div>

      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <CostItem icon={<Bed className="w-4 h-4" />} label="Accommodation" amount={breakdown.accommodation} />
          <CostItem icon={<UtensilsCrossed className="w-4 h-4" />} label="Meals" amount={breakdown.meals} />
          <CostItem icon={<Bus className="w-4 h-4" />} label="Transport" amount={breakdown.transport} />
          <CostItem icon={<Landmark className="w-4 h-4" />} label="Attractions" amount={breakdown.attractions} />
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-blue-900">Total Cost</span>
            <span className="text-2xl font-bold text-blue-600">£{totalCost.toFixed(2)}</span>
          </div>
        </div>

        {totalCost > 0 && (
          <div className="bg-green-50 p-4 rounded-lg text-sm text-green-700">
            <p>✓ Your trip is planned for {tripDetails.adults + tripDetails.kids} people</p>
            <p>✓ {tripDetails.nights} nights of accommodation</p>
            {tripDetails.meals > 0 && <p>✓ {tripDetails.meals} meals included</p>}
            {Object.values(tripDetails.attractions).some(v => v > 0) && (
              <p>✓ Attraction tickets included</p>
            )}
          </div>
        )}

        <a
          href="https://www.wightlink.co.uk/book/"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
        >
          Book Ferry Tickets
        </a>
      </div>
    </div>
  );
};

export default CostSummary;