export type FormErrors<T> = Partial<Record<keyof T, string>>;

export function hasErrors(obj: object) {
  return Object.values(obj).some(Boolean);
}
