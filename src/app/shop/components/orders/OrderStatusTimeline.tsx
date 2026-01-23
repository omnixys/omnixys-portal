"use client";

import {
  Box,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
import Link from "next/link";

type Status = "Placed" | "Processing" | "Shipped" | "Delivered";

interface TimelineEvent {
  status: Status;
  timestamp?: string; // ISO oder formatiert
  trackingId?: string; // nur für Shipped
}

const steps: Status[] = ["Placed", "Processing", "Shipped", "Delivered"];

/* ---------------- Connector ---------------- */
const Connector = styled(StepConnector)(() => ({
  "& .MuiStepConnector-line": {
    borderColor: "#e0e0e0",
    borderTopWidth: 2,
  },
  "&.Mui-active .MuiStepConnector-line": {
    borderColor: "#f36c21",
  },
  "&.Mui-completed .MuiStepConnector-line": {
    borderColor: "#1b5e20",
  },
}));

/* ---------------- Step Icon ---------------- */
function StepIcon(props: any) {
  const { active, completed } = props;

  return (
    <Box
      sx={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        backgroundColor: completed ? "#1b5e20" : active ? "#f36c21" : "#e0e0e0",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {completed ? <CheckIcon sx={{ fontSize: 18 }} /> : null}
    </Box>
  );
}

/* ---------------- Timeline ---------------- */
export function OrderStatusTimeline({
  currentStatus,
  events,
}: {
  currentStatus: Status;
  events: TimelineEvent[];
}) {
  const activeStep = steps.indexOf(currentStatus);

  const eventMap = Object.fromEntries(events.map((e) => [e.status, e]));

  return (
    <Box sx={{ mb: 6 }}>
      <Typography fontSize={18} fontWeight={700} mb={3}>
        Order Status
      </Typography>

      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<Connector />}
        // orientation={isMobile ? "vertical" : "horizontal"}
      >
        {steps.map((label) => {
          const event = eventMap[label];

          return (
            <Step key={label}>
              <StepLabel StepIconComponent={StepIcon}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography fontSize={13} fontWeight={600}>
                    {label}
                  </Typography>

                  {/* Timestamp */}
                  <Typography
                    fontSize={12}
                    color="text.secondary"
                    sx={{ mt: 0.5 }}
                  >
                    {event?.timestamp ?? "—"}
                  </Typography>

                  {/* Tracking link (only for Shipped) */}
                  {label === "Shipped" && event?.trackingId && (
                    <MuiLink
                      component={Link}
                      href={`/tracking/${event.trackingId}`}
                      underline="hover"
                      sx={{
                        display: "block",
                        mt: 0.5,
                        fontSize: 12,
                        color: "#f36c21",
                        fontWeight: 600,
                      }}
                    >
                      Track package →
                    </MuiLink>
                  )}
                </Box>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
