import { SearchFormConfig } from "./searchTypes";

export const SEARCH_CONFIGS: SearchFormConfig[] = [
  {
    category: "flights",
    fields: [
      { id: "from", label: "From", type: "location" },
      { id: "to", label: "To", type: "location" },
      { id: "dates", label: "Dates", type: "daterange" },
      { id: "passengers", label: "Passengers", type: "number" },
    ],
  },
  {
    category: "hotels",
    fields: [
      { id: "destination", label: "Destination", type: "location" },
      { id: "dates", label: "Dates", type: "daterange" },
      { id: "guests", label: "Guests", type: "number" },
    ],
  },
  {
    category: "cars",
    fields: [
      { id: "pickup", label: "Pickup location", type: "location" },
      { id: "dates", label: "Dates", type: "daterange" },
    ],
  },
  {
    category: "activities",
    fields: [
      { id: "location", label: "Location", type: "location" },
      { id: "date", label: "Date", type: "date" },
    ],
  },
];
