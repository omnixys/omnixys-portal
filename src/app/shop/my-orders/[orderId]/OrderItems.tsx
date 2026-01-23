"use client";

import { Box, Divider, Typography } from "@mui/material";

export function OrderItems({ items }: { items: any[] }) {
  return (
    <Box>
      <Typography fontSize={18} fontWeight={700} mb={3}>
        Items
      </Typography>

      {items.map((i, idx) => (
        <Box key={i.id}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "auto 1fr auto auto",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={i.image}
              sx={{
                width: 64,
                height: 64,
                borderRadius: 2,
                border: "1px solid #eee",
              }}
            />

            <Box>
              <Typography fontWeight={600}>{i.title}</Typography>
              <Typography fontSize={13} color="text.secondary">
                Color: {i.color}
              </Typography>
            </Box>

            <Typography>x{i.qty}</Typography>
            <Typography fontWeight={600}>
              ${(i.price * i.qty).toFixed(2)}
            </Typography>
          </Box>

          {idx < items.length - 1 && <Divider sx={{ my: 2 }} />}
        </Box>
      ))}
    </Box>
  );
}
