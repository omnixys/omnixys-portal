import { Trip } from "../trips/tripTypes";
import { GlobeRoute } from "./globeTypes";

export function getTripYear(trip: Trip): number {
  return new Date(trip.startDate).getFullYear();
}


export function deriveGlobeRoutes(trips: Trip[]): GlobeRoute[] {
  return trips?.flatMap((trip) => {
    const routes: GlobeRoute[] = [];

    for (let i = 0; i < trip.locations.length - 1; i++) {
      routes.push({
        id: `${trip.id}-${i}`,
        from: {
          id: trip.locations[i].id,
          label: trip.locations[i].name,
          lat: trip.locations[i].lat,
          lng: trip.locations[i].lng,
        },
        to: {
          id: trip.locations[i + 1].id,
          label: trip.locations[i + 1].name,
          lat: trip.locations[i + 1].lat,
          lng: trip.locations[i + 1].lng,
        },
      });
    }

    return routes;
  });
}
