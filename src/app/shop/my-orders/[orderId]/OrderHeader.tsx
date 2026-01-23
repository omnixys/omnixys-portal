"use client";

import { Box, Chip, Typography } from "@mui/material";

export function OrderHeader({ order }: { order: any }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography fontSize={22} fontWeight={700}>
        Order #{order.id}
      </Typography>
      <Typography fontSize={14} color="text.secondary">
        Placed on {order.date}
      </Typography>

      <Chip
        label={order.status}
        color={order.status === "Pending" ? "warning" : "success"}
        size="small"
        sx={{ mt: 1 }}
      />
    </Box>
  );
}
