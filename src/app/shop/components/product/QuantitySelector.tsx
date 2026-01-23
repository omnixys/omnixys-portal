// components/product/QuantitySelector.tsx
"use client";

import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

export function QuantitySelector({ stock = 12 }: { stock?: number }) {
  const [qty, setQty] = useState(1);

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 3 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #ddd",
          borderRadius: 999,
          px: 1,
        }}
      >
        <Button onClick={() => setQty(Math.max(1, qty - 1))}>−</Button>
        <Typography>{qty}</Typography>
        <Button onClick={() => setQty(qty + 1)}>+</Button>
      </Box>

      <Typography fontSize={13} color="error.main">
        Only {stock} items left
      </Typography>
    </Box>
  );
}
