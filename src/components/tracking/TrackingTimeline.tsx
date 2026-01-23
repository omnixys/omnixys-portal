// components/tracking/TrackingTimeline.tsx
"use client";

import { Box, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/CheckCircle";

interface TrackingEvent {
  id: string;
  status: string;
  description: string;
  location?: string;
  timestamp: string;
  isCurrent?: boolean;
}

export function TrackingTimeline({ events }: { events: TrackingEvent[] }) {
  return (
    <Box sx={{ mt: 6 }}>
      <Typography fontSize={18} fontWeight={700} mb={4}>
        Shipment Tracking
      </Typography>

      <Box sx={{ position: "relative", pl: 3 }}>
        {events.map((event, index) => {
          const isCompleted = index > 0;
          const color = event.isCurrent
            ? "#f36c21"
            : isCompleted
              ? "#1b5e20"
              : "#bdbdbd";

          return (
            <Box
              key={event.id}
              sx={{
                display: "flex",
                gap: 2,
                mb: 4,
                position: "relative",
              }}
            >
              {/* Timeline Dot */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    backgroundColor: color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {isCompleted && (
                    <CheckIcon sx={{ fontSize: 12, color: "#fff" }} />
                  )}
                </Box>

                {/* Vertical Line */}
                {index !== events.length - 1 && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 18,
                      left: "50%",
                      width: 2,
                      height: "calc(100% + 16px)",
                      backgroundColor: "#e0e0e0",
                      transform: "translateX(-50%)",
                    }}
                  />
                )}
              </Box>

              {/* Content */}
              <Box>
                <Typography fontWeight={600}>{event.status}</Typography>

                <Typography fontSize={13} color="text.secondary">
                  {event.timestamp}
                </Typography>

                <Typography fontSize={14} mt={0.5}>
                  {event.description}
                </Typography>

                {event.location && (
                  <Typography fontSize={13} color="text.secondary">
                    {event.location}
                  </Typography>
                )}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
