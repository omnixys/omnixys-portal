export type InterestCategory =
  | "banking"
  | "technology"
  | "realEstate"
  | "insurance"
  | "investments"
  | "lifestyle";

export const INTEREST_CATEGORY_MAP = {
  CREDIT_AND_DEBT: "banking",
  SAVING_AND_FINANCE: "banking",
  BANK_PRODUCTS_AND_SERVICES: "banking",

  TECHNOLOGY: "technology",
  TECHNOLOGY_AND_INNOVATION: "technology",

  REAL_ESTATE: "realEstate",

  INSURANCE: "insurance",

  INVESTMENTS: "investments",

  SPORTS: "lifestyle",
  MUSIC: "lifestyle",
  TRAVEL: "lifestyle",
} as const;
