export type TravelCategoryId =
  | "flights"
  | "cruises"
  | "cars"
  | "bikes"
  | "hotels"
  | "airbnbs"
  | "hostels"
  | "activities"
  | "groups";

export interface TravelCategory {
  id: TravelCategoryId;
  label: string;
}

export const TRAVEL_CATEGORIES: TravelCategory[] = [
  { id: "flights", label: "Flights" },
  { id: "cruises", label: "Cruises & Ferries" },
  { id: "cars", label: "Cars" },
  { id: "bikes", label: "Bikes" },
  { id: "hotels", label: "Hotels" },
  { id: "airbnbs", label: "Airbnbs" },
  { id: "hostels", label: "Hostels" },
  { id: "activities", label: "Activities" },
  { id: "groups", label: "Group Trips" },
];
