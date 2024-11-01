import { TripDetails } from '../App';

const COSTS = {
  NIGHTLY_STAY: 120,
  MEAL_ADULT: 11.50,
  MEAL_CHILD: 6.50,
  TRANSPORT: 2,
  ATTRACTIONS: {
    OSBORNE_HOUSE: { adult: 18.50, child: 11.10 },
    CARISBROOKE_CASTLE: { adult: 11.30, child: 6.80 },
    VENTNOR_BOTANIC: { adult: 11.50, child: 7.00 },
    ROBIN_HILL: { adult: 15.00, child: 7.50 },
    STEAM_RAILWAY: { adult: 22.00, child: 11.00 }
  }
};

export const calculateAttractionCost = (
  adults: number,
  kids: number,
  tickets: number,
  adultPrice: number,
  childPrice: number
) => {
  const adultTickets = Math.min(adults, tickets);
  const childTickets = Math.min(kids, tickets - adultTickets);
  return (adultTickets * adultPrice) + (childTickets * childPrice);
};

export const calculateBreakdown = (details: TripDetails) => {
  const accommodation = details.nights * COSTS.NIGHTLY_STAY;
  const meals = details.meals * (
    (details.adults * COSTS.MEAL_ADULT) +
    (details.kids * COSTS.MEAL_CHILD)
  );
  const transport = details.transportDays * COSTS.TRANSPORT;

  const attractions = (
    calculateAttractionCost(
      details.adults,
      details.kids,
      details.attractions.osborneHouse,
      COSTS.ATTRACTIONS.OSBORNE_HOUSE.adult,
      COSTS.ATTRACTIONS.OSBORNE_HOUSE.child
    ) +
    calculateAttractionCost(
      details.adults,
      details.kids,
      details.attractions.carisbrookeCastle,
      COSTS.ATTRACTIONS.CARISBROOKE_CASTLE.adult,
      COSTS.ATTRACTIONS.CARISBROOKE_CASTLE.child
    ) +
    calculateAttractionCost(
      details.adults,
      details.kids,
      details.attractions.ventnorBotanic,
      COSTS.ATTRACTIONS.VENTNOR_BOTANIC.adult,
      COSTS.ATTRACTIONS.VENTNOR_BOTANIC.child
    ) +
    calculateAttractionCost(
      details.adults,
      details.kids,
      details.attractions.robinHill,
      COSTS.ATTRACTIONS.ROBIN_HILL.adult,
      COSTS.ATTRACTIONS.ROBIN_HILL.child
    ) +
    calculateAttractionCost(
      details.adults,
      details.kids,
      details.attractions.steamRailway,
      COSTS.ATTRACTIONS.STEAM_RAILWAY.adult,
      COSTS.ATTRACTIONS.STEAM_RAILWAY.child
    )
  );

  return {
    accommodation,
    meals,
    transport,
    attractions
  };
};

export const calculateTotalCost = (details: TripDetails) => {
  const breakdown = calculateBreakdown(details);
  return (
    breakdown.accommodation +
    breakdown.meals +
    breakdown.transport +
    breakdown.attractions
  );
};