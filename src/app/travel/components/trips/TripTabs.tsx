"use client";

import { Tabs, Tab } from "@mui/material";

export type TripTab = "overview" | "itinerary" | "map";

interface TripTabsProps {
  value: TripTab;
  onChange: (v: TripTab) => void;
}

export function TripTabs({ value, onChange }: TripTabsProps) {
  return (
    <Tabs
      value={value}
      onChange={(_, v) => onChange(v)}
      textColor="primary"
      indicatorColor="primary"
    >
      <Tab label="Overview" value="overview" />
      <Tab label="Itinerary" value="itinerary" />
      <Tab label="Map" value="map" />
    </Tabs>
  );
}
