"use client";

import { Stack, TextField, MenuItem } from "@mui/material";
import { useFilterStore } from "../../lib/filters/filterStore";
import { FilterConfig, SortOption } from "../../lib/filters/filterTypes";

interface Props {
  filters: FilterConfig[];
  sortOptions?: SortOption[];
}

export function FilterBar({ filters, sortOptions }: Props) {
  const { filters: values, setFilter, sortBy, setSort } = useFilterStore();

  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
      {filters.map((f) => {
        if (f.type === "text") {
          return (
            <TextField
              key={f.id}
              label={f.label}
              value={values[f.id] ?? ""}
              onChange={(e) => setFilter(f.id, e.target.value)}
              fullWidth
            />
          );
        }

        if (f.type === "select") {
          return (
            <TextField
              key={f.id}
              select
              label={f.label}
              value={values[f.id] ?? ""}
              onChange={(e) => setFilter(f.id, e.target.value)}
              fullWidth
            >
              {f.options?.map((o) => (
                <MenuItem key={o.value} value={o.value}>
                  {o.label}
                </MenuItem>
              ))}
            </TextField>
          );
        }

        return null;
      })}

      {sortOptions && (
        <TextField
          select
          label="Sort by"
          value={sortBy ?? ""}
          onChange={(e) => setSort(e.target.value)}
          fullWidth
        >
          {sortOptions.map((s) => (
            <MenuItem key={s.id} value={s.id}>
              {s.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    </Stack>
  );
}
