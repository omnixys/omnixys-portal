export function applyFilters<T>(data: T[], filters: Record<string, any>): T[] {
  return data.filter((item: any) => {
    return Object.entries(filters).every(([key, value]) => {
      if (value === undefined || value === "") return true;

      const field = item[key];

      if (typeof value === "number") {
        return field <= value;
      }

      if (Array.isArray(value)) {
        return value.includes(field);
      }

      if (typeof value === "string") {
        return String(field).toLowerCase().includes(value.toLowerCase());
      }

      return true;
    });
  });
}
