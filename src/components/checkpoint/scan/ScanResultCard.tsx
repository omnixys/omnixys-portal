"use client";

import { ScanResult } from "@/types/scan/scan.type";
import { Box, Chip, Stack, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

export default function ScanResultCard({ result }: { result: ScanResult }) {
  console.log({ result });
  const theme = useTheme();

  const color =
    result.status === "SUCCESS"
      ? theme.palette.success.main
      : result.status === "ERROR"
      ? theme.palette.error.main
      : theme.palette.warning.main;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
    >
      <Box
        sx={{
          p: 3,
          borderRadius: 4,
          bgcolor: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Stack spacing={1.5}>
          <Chip
            label={result.status}
            sx={{ bgcolor: color + "22", color, fontWeight: 700 }}
          />

          <Typography variant="h6" fontWeight={700}>
            {result.message}
          </Typography>

          {result.guest && (
            <Typography>
              <b>Gast:</b> {result.guest.firstName} {result.guest.lastName}
            </Typography>
          )}

          {result.seat && (
            <Typography>
              <b>Sitz:</b> {result.seat.sectionName}
              {result.seat.tableName && ` · Tisch ${result.seat.tableName}`}
              {result.seat.number && ` · Platz ${result.seat.number}`}
            </Typography>
          )}

          {result.ticket && (
            <Typography variant="caption" sx={{ opacity: 0.7 }}>
              Ticket-ID: {result.ticket.id}
            </Typography>
          )}
        </Stack>
      </Box>
    </motion.div>
  );
}
