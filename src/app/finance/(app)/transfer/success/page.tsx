"use client";

import { Card, CardContent, Typography, Button, Stack } from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { pageTransition } from "../../../lib/motion";

export default function TransferSuccessPage() {
  return (
    <motion.div {...pageTransition}>
      <Card sx={{ maxWidth: 480 }}>
        <CardContent>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <CheckCircleIcon color="success" sx={{ fontSize: 64 }} />

            <Typography variant="h3">Transfer Successful</Typography>

            <Typography color="text.secondary">
              €500.00 has been sent successfully.
            </Typography>

            <Button variant="contained" href="/dashboard">
              Back to Dashboard
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
}
