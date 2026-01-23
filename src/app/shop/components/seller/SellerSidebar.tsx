// components/seller/SellerSidebar.tsx
"use client";

import { Box, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ListIcon from "@mui/icons-material/List";
import ReceiptIcon from "@mui/icons-material/Receipt";

const items = [
  { label: "Add Product", icon: <AddIcon />, active: true },
  { label: "Product List", icon: <ListIcon /> },
  { label: "Orders", icon: <ReceiptIcon /> },
];

export function SellerSidebar() {
  return (
    <Box
      sx={{
        width: 240,
        borderRight: "1px solid #eee",
        py: 4,
      }}
    >
      {items.map((item) => (
        <Box
          key={item.label}
          sx={{
            px: 3,
            py: 1.5,
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            cursor: "pointer",
            backgroundColor: item.active ? "#fff3e8" : "transparent",
            borderLeft: item.active
              ? "4px solid #f36c21"
              : "4px solid transparent",
          }}
        >
          {item.icon}
          <Typography fontWeight={item.active ? 600 : 400}>
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
