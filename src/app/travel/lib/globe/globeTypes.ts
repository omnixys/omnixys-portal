export interface GlobePoint {
  id: string;
  label: string;
  lat: number;
  lng: number;
  country?: string;
}

export interface GlobeRoute {
  id: string;
  from: GlobePoint;
  to: GlobePoint;
}

export interface GlobeStats {
  countries: number;
  cities: number;
  trips: number;
  distanceKm: number;
}

export interface GlobeState {
  selectedCountry?: string;
  selectedYear?: number;
}