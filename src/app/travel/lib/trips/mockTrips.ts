import { Trip } from "./tripTypes";

export const MOCK_TRIPS: Trip[] = [
  {
    id: "1",
    title: "Cherry Blossom Adventure in Japan",
    description: "Experience the beauty of Sakura season.",
    startDate: "2025-04-22",
    endDate: "2025-06-24",
    locations: [
      {
        id: "tokyo",
        name: "Tokyo",
        lat: 35.6762,
        lng: 139.6503,
        day: 1,
      },
      {
        id: "kyoto",
        name: "Kyoto",
        lat: 35.0116,
        lng: 135.7681,
        day: 4,
      },
    ],
  },
];
