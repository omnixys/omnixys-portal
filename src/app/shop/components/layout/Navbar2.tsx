// components/header/Navbar.tsx
"use client";

import { Box, IconButton, InputBase, Stack, Typography } from "@mui/material";
import ShoppingBagOutlined from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutline from "@mui/icons-material/PersonOutline";

export function Navbar() {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        backgroundColor: "#fff",
        borderBottom: "1px solid #eee",
      }}
    >
      <Box
        sx={{
          maxWidth: 1280,
          mx: "auto",
          px: 3,
          py: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Left */}
        <Stack direction="row" spacing={4} alignItems="center">
          <Typography fontWeight={700} fontSize={20}>
            QuickCart
          </Typography>

          <Stack direction="row" spacing={3}>
            <Typography>Categories</Typography>
            <Typography>Deals</Typography>
            <Typography>What’s New</Typography>
            <Typography>Delivery</Typography>
          </Stack>
        </Stack>

        {/* Center */}
        <Box sx={{ flex: 1, px: 6 }}>
          <InputBase
            placeholder="Search products…"
            sx={{
              width: "100%",
              px: 2,
              py: 1.2,
              borderRadius: 999,
              border: "1px solid #ddd",
              fontSize: 14,
            }}
          />
        </Box>

        {/* Right */}
        <Stack direction="row" spacing={1}>
          <IconButton>
            <PersonOutline />
          </IconButton>
          <IconButton>
            <ShoppingBagOutlined />
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}
