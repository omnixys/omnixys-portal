import { GlobePoint, GlobeRoute, GlobeStats } from "./globeTypes";

export const VISITED_POINTS: GlobePoint[] = [
  {
    id: "berlin",
    label: "Berlin",
    lat: 52.52,
    lng: 13.405,
    country: "Germany",
  },
  {
    id: "tokyo",
    label: "Tokyo",
    lat: 35.6762,
    lng: 139.6503,
    country: "Japan",
  },
  {
    id: "kyoto",
    label: "Kyoto",
    lat: 35.0116,
    lng: 135.7681,
    country: "Japan",
  },
  {
    id: "reykjavik",
    label: "Reykjavik",
    lat: 64.1466,
    lng: -21.9426,
    country: "Iceland",
  },
];

export const ROUTES: GlobeRoute[] = [
  {
    id: "berlin-tokyo",
    from: VISITED_POINTS[0],
    to: VISITED_POINTS[1],
  },
  {
    id: "berlin-reykjavik",
    from: VISITED_POINTS[0],
    to: VISITED_POINTS[3],
  },
];

export const GLOBE_STATS: GlobeStats = {
  countries: 3,
  cities: 4,
  trips: 3,
  distanceKm: 42000,
};
