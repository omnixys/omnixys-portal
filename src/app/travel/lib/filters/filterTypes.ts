export type FilterType = "text" | "numberRange" | "select" | "multiSelect";

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterConfig {
  id: string;
  label: string;
  type: FilterType;
  options?: FilterOption[];
}

export interface SortOption {
  id: string;
  label: string;
}
