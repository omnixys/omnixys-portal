"use client";

import { Slider, Typography } from "@mui/material";
import { useGlobeState } from "../../lib/globe/useGlobeState";

interface Props {
  years: number[];
}

export function TripTimeline({ years }: Props) {
  const { selectedYear, setYear } = useGlobeState();

  return (
    <>
      <Typography fontWeight={600}>Timeline</Typography>

      <Slider
        min={Math.min(...years)}
        max={Math.max(...years)}
        value={selectedYear ?? Math.max(...years)}
        onChange={(_, v) => setYear(v as number)}
        marks={years.map((y) => ({ value: y, label: y }))}
      />
    </>
  );
}
