"use client";

import { create } from "zustand";
import { GlobeState } from "./globeTypes";

export const useGlobeState = create<
  GlobeState & {
    setCountry: (c?: string) => void;
    setYear: (y?: number) => void;
  }
>((set) => ({
  selectedCountry: undefined,
  selectedYear: undefined,

  setCountry: (c) => set({ selectedCountry: c }),
  setYear: (y) => set({ selectedYear: y }),
}));
