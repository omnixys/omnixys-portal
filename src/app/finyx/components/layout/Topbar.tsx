"use client";

import { Box, Typography, IconButton, Avatar, Badge } from "@mui/material";
import { Notifications } from "@mui/icons-material";

export default function Topbar() {
  return (
    <Box
      height={72}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={4}
      bgcolor="background.paper"
      boxShadow="0 1px 0 rgba(15,23,42,0.06)"
    >
      <Typography variant="h3">Dashboard</Typography>

      <Box display="flex" alignItems="center" gap={2}>
        <IconButton>
          <Badge badgeContent={3} color="primary">
            <Notifications />
          </Badge>
        </IconButton>

        <Avatar sx={{ width: 36, height: 36 }}>A</Avatar>
      </Box>
    </Box>
  );
}
