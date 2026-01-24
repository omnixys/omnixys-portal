import { Trip } from "../trips/tripTypes";
import { GlobePoint } from "./globeTypes";

export function deriveGlobePoints(trips: Trip[]): GlobePoint[] {
  return trips?.flatMap((trip) =>
    trip.locations.map((loc) => ({
      id: `${trip.id}-${loc.id}`,
      label: loc.name,
      lat: loc.lat,
      lng: loc.lng,
      country: undefined, // optional, wenn später ergänzt
    })),
  );
}
