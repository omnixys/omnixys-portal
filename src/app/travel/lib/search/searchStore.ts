import { create } from "zustand";

interface SearchState {
  values: Record<string, any>;
  setValue: (key: string, value: any) => void;
  reset: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
  values: {},
  setValue: (key, value) =>
    set((state) => ({
      values: { ...state.values, [key]: value },
    })),
  reset: () => set({ values: {} }),
}));
