export interface ExploreLocation {
  id: string;
  title: string;
  description?: string;
  lat: number;
  lng: number;
  imageUrl: string;
}

export interface ExploreDeal {
  id: string;
  title: string;
  subtitle?: string;
  price: number;
  currency?: string;
}
