export function applySort<T>(data: T[], sortBy?: string): T[] {
  if (!sortBy) return data;

  const sorted = [...data];

  switch (sortBy) {
    case "price-asc":
      return sorted.sort((a: any, b: any) => a.price - b.price);

    case "price-desc":
      return sorted.sort((a: any, b: any) => b.price - a.price);

    default:
      return data;
  }
}
