import { Trip } from "../trips/tripTypes";

export interface CountryItem {
  country: string;
  lat: number;
  lng: number;
}

export function deriveCountries(trips: Trip[]): CountryItem[] {
  const map = new Map<string, CountryItem>();

  trips.forEach((trip) => {
    trip.locations.forEach((loc) => {
      // Annahme: erste Location eines Landes repräsentativ
      if (!map.has(loc.name)) {
        map.set(loc.name, {
          country: loc.name,
          lat: loc.lat,
          lng: loc.lng,
        });
      }
    });
  });

  return Array.from(map.values());
}
