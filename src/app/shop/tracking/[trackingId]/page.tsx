// app/tracking/[trackingId]/page.tsx
import { Box, Typography } from "@mui/material";
import { TrackingTimeline } from "@/components/tracking/TrackingTimeline";
import { CarrierBadge } from "../../../../components/tracking/CarrierBadge";

export default function TrackingPage({
  params,
}: {
  params: { trackingId: string };
}) {
  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 8 }}>
      <Typography fontSize={22} fontWeight={700} mb={2}>
        Tracking #{params.trackingId}
      </Typography>

      <CarrierBadge carrier="DHL" trackingId={params.trackingId} />

      <TrackingTimeline
        events={[
          {
            id: "1",
            status: "Delivered",
            description: "Package delivered to recipient",
            location: "Berlin",
            timestamp: "23 Jan 2026 · 14:32",
            isCurrent: true,
          },
          {
            id: "2",
            status: "Out for Delivery",
            description: "Courier is on the way",
            location: "Berlin Hub",
            timestamp: "23 Jan 2026 · 08:10",
          },
          {
            id: "3",
            status: "Arrived at Facility",
            description: "Package arrived at sorting facility",
            location: "Frankfurt DC",
            timestamp: "22 Jan 2026 · 22:45",
          },
          {
            id: "4",
            status: "Shipment Picked Up",
            description: "Package picked up from seller",
            location: "Seller Warehouse",
            timestamp: "22 Jan 2026 · 08:40",
          },
        ]}
      />
    </Box>
  );
}
