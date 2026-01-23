// components/cart/PromoCode.tsx
"use client";

import { Box, Button, TextField, Typography } from "@mui/material";

export function PromoCode() {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography fontSize={13} fontWeight={600} mb={1}>
        PROMO CODE
      </Typography>

      <TextField
        fullWidth
        size="small"
        placeholder="Enter promo code"
        sx={{ mb: 1.5 }}
      />

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#f36c21",
          textTransform: "none",
          fontWeight: 600,
          "&:hover": { backgroundColor: "#e05f1c" },
        }}
      >
        Apply
      </Button>
    </Box>
  );
}
