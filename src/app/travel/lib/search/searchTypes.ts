export type SearchCategory =
  | "flights"
  | "hotels"
  | "cars"
  | "cruises"
  | "bikes"
  | "airbnbs"
  | "hostels"
  | "activities"
  | "groups";

export type SearchFieldType =
  | "location"
  | "date"
  | "daterange"
  | "number"
  | "select";

export interface SearchFieldConfig {
  id: string;
  label: string;
  type: SearchFieldType;
  options?: { label: string; value: string }[];
}

export type SearchFormConfig = {
  category: SearchCategory;
  fields: SearchFieldConfig[];
};
