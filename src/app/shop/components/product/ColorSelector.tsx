// components/product/ColorSelector.tsx
"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";

const COLORS = [
  { name: "Pink", value: "#f2b3b3" },
  { name: "Black", value: "#111" },
  { name: "Silver", value: "#ddd" },
  { name: "Blue", value: "#c7d7e5" },
];

export function ColorSelector() {
  const [active, setActive] = useState(0);

  return (
    <>
      <Typography fontSize={14} fontWeight={600} sx={{ mt: 3, mb: 1 }}>
        Choose a Color
      </Typography>

      <Box sx={{ display: "flex", gap: 1.5 }}>
        {COLORS.map((c, i) => (
          <Box
            key={c.name}
            onClick={() => setActive(i)}
            sx={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              backgroundColor: c.value,
              cursor: "pointer",
              border: i === active ? "2px solid #1b5e20" : "2px solid #eee",
            }}
          />
        ))}
      </Box>
    </>
  );
}
