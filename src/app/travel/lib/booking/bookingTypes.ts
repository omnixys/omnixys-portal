export type BookingCategory =
  | "flights"
  | "hotels"
  | "cars"
  | "cruises"
  | "activities";

export interface BookingResult {
  id: string;
  title: string;
  subtitle?: string;
  price: number;
  currency?: string;
}
