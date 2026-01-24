import { FilterConfig, SortOption } from "../filters/filterTypes";

export const BOOKING_FILTERS: FilterConfig[] = [
  {
    id: "title",
    label: "Search",
    type: "text",
  },
];

export const BOOKING_SORTS: SortOption[] = [
  { id: "price-asc", label: "Price (Low → High)" },
  { id: "price-desc", label: "Price (High → Low)" },
];
