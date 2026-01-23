"use client";

import {
  Card,
  CardContent,
  Typography,
  Stack,
  Divider,
  Button,
  Box,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { pageTransition } from "../../../lib/motion";

export default function TransferReviewPage() {
  const router = useRouter();

  return (
    <motion.div {...pageTransition}>
      <Typography variant="h2" mb={3}>
        Review Transfer
      </Typography>

      <Card sx={{ maxWidth: 520 }}>
        <CardContent>
          <Stack spacing={2}>
            <SummaryRow label="From" value="Main Account" />
            <SummaryRow label="To" value="Max Mustermann" />
            <SummaryRow label="IBAN" value="DE12 **** **** **** 1234" />
            <SummaryRow label="Amount" value="€500.00" highlight />
            <SummaryRow label="Purpose" value="Rent January" />

            <Divider />

            <Box display="flex" gap={2}>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => router.back()}
              >
                Edit
              </Button>

              <Button
                variant="contained"
                fullWidth
                color="primary"
                onClick={() => router.push("/transfer/success")}
              >
                Confirm Transfer
              </Button>
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function SummaryRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <Box display="flex" justifyContent="space-between">
      <Typography color="text.secondary">{label}</Typography>
      <Typography fontWeight={highlight ? 700 : 500}>{value}</Typography>
    </Box>
  );
}
