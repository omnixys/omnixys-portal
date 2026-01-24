"use client";

import { Stack, Button } from "@mui/material";
import { SEARCH_CONFIGS } from "../../lib/search/searchConfigs";
import { SearchCategory } from "../../lib/search/searchTypes";
import { GlassCard } from "../ui/GlassCard";
import { SearchField } from "./SearchField";


interface SearchFormProps {
  category: SearchCategory;
}

export function SearchForm({ category }: SearchFormProps) {
  const config = SEARCH_CONFIGS.find((c) => c.category === category);

  if (!config) return null;

  return (
    <GlassCard>
      <Stack spacing={3}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          {config.fields.map((field) => (
            <SearchField key={field.id} field={field} />
          ))}
        </Stack>

        <Button size="large" variant="contained" sx={{ alignSelf: "flex-end" }}>
          Search
        </Button>
      </Stack>
    </GlassCard>
  );
}
