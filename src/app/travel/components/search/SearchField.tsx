"use client";

import { TextField } from "@mui/material";
import { useSearchStore } from "../../lib/search/searchStore";
import { SearchFieldConfig } from "../../lib/search/searchTypes";


interface Props {
  field: SearchFieldConfig;
}

export function SearchField({ field }: Props) {
  const { values, setValue } = useSearchStore();

  return (
    <TextField
      fullWidth
      label={field.label}
      value={values[field.id] ?? ""}
      onChange={(e) => setValue(field.id, e.target.value)}
    />
  );
}
