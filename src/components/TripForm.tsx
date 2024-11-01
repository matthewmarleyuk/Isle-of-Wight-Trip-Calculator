import React from 'react';
import { TripDetails } from '../App';
import NumberInput from './NumberInput';
import { Users, Bed, UtensilsCrossed, Bus, Landmark } from 'lucide-react';

interface TripFormProps {
  tripDetails: TripDetails;
  setTripDetails: React.Dispatch<React.SetStateAction<TripDetails>>;
}

const TripForm: React.FC<TripFormProps> = ({ tripDetails, setTripDetails }) => {
  const handleBasicInfoChange = (field: keyof Omit<TripDetails, 'attractions'>) => (value: number) => {
    setTripDetails(prev => ({ ...prev, [field]: value }));
  };

  const handleAttractionChange = (attraction: keyof TripDetails['attractions']) => (value: number) => {
    setTripDetails(prev => ({
      ...prev,
      attractions: { ...prev.attractions, [attraction]: value }
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-blue-900 border-b pb-2 flex items-center gap-2">
          <Users className="w-5 h-5" />
          Basic Information
        </h2>
        <NumberInput
          icon={<Users className="w-4 h-4" />}
          label="Number of Adults"
          value={tripDetails.adults}
          onChange={handleBasicInfoChange('adults')}
        />
        <NumberInput
          icon={<Users className="w-4 h-4" />}
          label="Number of Kids"
          value={tripDetails.kids}
          onChange={handleBasicInfoChange('kids')}
        />
        <NumberInput
          icon={<Bed className="w-4 h-4" />}
          label="Number of Nights Stay (£120 per night)"
          value={tripDetails.nights}
          onChange={handleBasicInfoChange('nights')}
        />
        <NumberInput
          icon={<UtensilsCrossed className="w-4 h-4" />}
          label="Number of Restaurant Meals (£11.50 per adult, £6.50 per child)"
          value={tripDetails.meals}
          onChange={handleBasicInfoChange('meals')}
        />
        <NumberInput
          icon={<Bus className="w-4 h-4" />}
          label="Days Using Public Transport (£2 per journey)"
          value={tripDetails.transportDays}
          onChange={handleBasicInfoChange('transportDays')}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-blue-900 border-b pb-2 flex items-center gap-2">
          <Landmark className="w-5 h-5" />
          Attractions
        </h2>
        <NumberInput
          icon={<Landmark className="w-4 h-4" />}
          label="Osborne House (£18.50 per adult, £11.10 per child)"
          value={tripDetails.attractions.osborneHouse}
          onChange={handleAttractionChange('osborneHouse')}
        />
        <NumberInput
          icon={<Landmark className="w-4 h-4" />}
          label="Carisbrooke Castle (£11.30 per adult, £6.80 per child)"
          value={tripDetails.attractions.carisbrookeCastle}
          onChange={handleAttractionChange('carisbrookeCastle')}
        />
        <NumberInput
          icon={<Landmark className="w-4 h-4" />}
          label="Ventnor Botanic Garden (£11.50 per adult, £7.00 per child)"
          value={tripDetails.attractions.ventnorBotanic}
          onChange={handleAttractionChange('ventnorBotanic')}
        />
        <NumberInput
          icon={<Landmark className="w-4 h-4" />}
          label="Robin Hill Country Park (£15.00 per adult, £7.50 per child)"
          value={tripDetails.attractions.robinHill}
          onChange={handleAttractionChange('robinHill')}
        />
        <NumberInput
          icon={<Landmark className="w-4 h-4" />}
          label="Isle of Wight Steam Railway (£22.00 per adult, £11.00 per child)"
          value={tripDetails.attractions.steamRailway}
          onChange={handleAttractionChange('steamRailway')}
        />
      </div>
    </div>
  );
};

export default TripForm;