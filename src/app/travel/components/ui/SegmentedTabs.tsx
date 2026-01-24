"use client";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";

interface SegmentedTabsProps<T extends string> {
  value: T;
  options: { value: T; label: string }[];
  onChange: (value: T) => void;
}

export function SegmentedTabs<T extends string>({
  value,
  options,
  onChange,
}: SegmentedTabsProps<T>) {
  return (
    <ToggleButtonGroup
      exclusive
      value={value}
      onChange={(_, v) => v && onChange(v)}
      sx={{
        background: "rgba(255,255,255,0.6)",
        borderRadius: 999,
        p: 0.5,
      }}
    >
      {options.map((opt) => (
        <ToggleButton
          key={opt.value}
          value={opt.value}
          sx={{
            borderRadius: 999,
            px: 2,
            border: "none",
          }}
        >
          {opt.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}
