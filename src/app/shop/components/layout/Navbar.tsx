"use client";

import { AppBar, Box, IconButton, InputBase, Toolbar } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

export function Navbar() {
  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Toolbar sx={{ gap: 3 }}>
        <Box sx={{ fontWeight: 700 }}>LOGO</Box>
        <Box sx={{ flexGrow: 1, display: "flex", gap: 2 }}>
          <span>Categories</span>
          <span>Deals</span>
          <span>What's New</span>
          <span>Delivery</span>
        </Box>
        <InputBase
          placeholder="Search…"
          sx={{ border: "1px solid #ddd", px: 1 }}
        />
        <IconButton>
          <PersonIcon />
        </IconButton>
        <IconButton>
          <ShoppingCartIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
