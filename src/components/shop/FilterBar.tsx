"use client";

import { Box } from "@mui/material";
import { MenuButton } from "./MenuButton";
import { useRouter, useSearchParams } from "next/navigation";

export function FilterBar() {
  const router = useRouter();
  const params = useSearchParams();

  const setSort = (value: string) => {
    const sp = new URLSearchParams(params.toString());
    sp.set("sort", value);
    router.push(`?${sp.toString()}`);
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexWrap: "wrap",
        justifyContent: "space-between",
        mb: 3,
      }}
    >
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        <MenuButton label="Headphone Type" items={[]} />
        <MenuButton label="Price" items={[]} />
        <MenuButton label="Review" items={[]} />
        <MenuButton label="Color" items={[]} />
        <MenuButton label="Material" items={[]} />
        <MenuButton label="Offer" items={[]} />
      </Box>

      <MenuButton
        label="Sort by"
        items={[
          { label: "Price: Low to High", onClick: () => setSort("price-asc") },
          { label: "Price: High to Low", onClick: () => setSort("price-desc") },
        ]}
      />
    </Box>
  );
}
