export interface TripLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  day?: number;
}

export interface Trip {
  id: string;
  title: string;
  description?: string;
  startDate: string;
  endDate: string;
  locations: TripLocation[];
}

