// components/tracking/CarrierBadge.tsx
"use client";

import { Box, Typography } from "@mui/material";

type Carrier = "DHL" | "UPS" | "FEDEX";

const LOGO_MAP: Record<Carrier, string> = {
  DHL: "/carriers/dhl.svg",
  UPS: "/carriers/ups.svg",
  FEDEX: "/carriers/fedex.svg",
};

export function CarrierBadge({
  carrier,
  trackingId,
}: {
  carrier: Carrier;
  trackingId?: string;
}) {
  const src = LOGO_MAP[carrier];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        px: 2,
        py: 1,
        borderRadius: 2,
        border: "1px solid #eee",
        backgroundColor: "#fafafa",
      }}
    >
      <Box
        component="img"
        src={src}
        alt={carrier}
        sx={{ height: 22, width: "auto" }}
      />

      <Box>
        <Typography fontSize={13} fontWeight={600}>
          {carrier}
        </Typography>
        {trackingId && (
          <Typography fontSize={12} color="text.secondary">
            Tracking #{trackingId}
          </Typography>
        )}
      </Box>
    </Box>
  );
}
