import { BookingResult } from "./bookingTypes";

export const BOOKING_RESULTS: Record<string, BookingResult[]> = {
  flights: [
    {
      id: "flight-1",
      title: "Berlin → Tokyo",
      subtitle: "Direct · ANA",
      price: 799,
    },
  ],
  hotels: [
    {
      id: "hotel-1",
      title: "Hotel Sakura Tokyo",
      subtitle: "5 nights · Breakfast included",
      price: 1299,
    },
  ],
  cars: [
    {
      id: "car-1",
      title: "Tesla Model 3",
      subtitle: "5 days · Unlimited mileage",
      price: 399,
    },
  ],
};
