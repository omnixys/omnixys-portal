import { ExploreLocation, ExploreDeal } from "./exploreTypes";

export const EXPLORE_LOCATIONS: ExploreLocation[] = [
  {
    id: "tokyo",
    title: "Tokyo",
    description: "Neon nights & culture",
    lat: 35.6762,
    lng: 139.6503,
    imageUrl: "/images/tokyo.jpg",
  },
  {
    id: "paris",
    title: "Paris",
    description: "Art, fashion & cuisine",
    lat: 48.8566,
    lng: 2.3522,
    imageUrl: "/images/paris.jpg",
  },
  {
    id: "iceland",
    title: "Iceland",
    description: "Nature & Northern Lights",
    lat: 64.9631,
    lng: -19.0208,
    imageUrl: "/images/iceland.jpg",
  },
];

export const EXPLORE_DEALS: ExploreDeal[] = [
  {
    id: "deal-tokyo",
    title: "Berlin → Tokyo",
    subtitle: "Direct · Spring",
    price: 799,
  },
  {
    id: "deal-paris",
    title: "Weekend in Paris",
    subtitle: "Hotel + Breakfast",
    price: 249,
  },
];
