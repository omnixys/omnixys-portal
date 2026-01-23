// components/layout/Footer.tsx
"use client";

import { Box, Grid, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box sx={{ borderTop: "1px solid #eee", mt: 12, py: 6 }}>
      <Box sx={{ maxWidth: 1300, mx: "auto", px: 3 }}>
        <Grid container spacing={6}>
          <Grid sx={{ xs: 12, md: 4 }}>
            <Typography fontWeight={700}>QuickCart</Typography>
            <Typography fontSize={14} color="text.secondary" mt={1}>
              Your one-stop shop for modern lifestyle products and accessories.
            </Typography>
          </Grid>

          <Grid sx={{ xs: 6, md: 2 }}>
            <Typography fontWeight={600}>Company</Typography>
            <Typography fontSize={14}>About</Typography>
            <Typography fontSize={14}>Careers</Typography>
            <Typography fontSize={14}>Blog</Typography>
          </Grid>

          <Grid sx={{ xs: 6, md: 2 }}>
            <Typography fontWeight={600}>Support</Typography>
            <Typography fontSize={14}>Help Center</Typography>
            <Typography fontSize={14}>Returns</Typography>
            <Typography fontSize={14}>Shipping</Typography>
          </Grid>

          <Grid sx={{ xs: 12, md: 4 }}>
            <Typography fontWeight={600}>Get in touch</Typography>
            <Typography fontSize={14}>+1-234-567-890</Typography>
            <Typography fontSize={14}>contact@greatstack.dev</Typography>
          </Grid>
        </Grid>

        <Typography
          fontSize={13}
          color="text.secondary"
          textAlign="center"
          sx={{ mt: 6 }}
        >
          © 2025 GreatStack.dev. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
