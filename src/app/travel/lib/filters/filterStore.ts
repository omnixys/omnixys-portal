import { create } from "zustand";

interface FilterState {
  filters: Record<string, any>;
  sortBy?: string;

  setFilter: (id: string, value: any) => void;
  setSort: (id: string) => void;
  reset: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  filters: {},
  sortBy: undefined,

  setFilter: (id, value) =>
    set((state) => ({
      filters: { ...state.filters, [id]: value },
    })),

  setSort: (id) => set({ sortBy: id }),

  reset: () => set({ filters: {}, sortBy: undefined }),
}));
