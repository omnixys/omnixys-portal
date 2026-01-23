"use client";

import {
  Card,
  CardContent,
  Typography,
  Stack,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { pageTransition } from "../../lib/motion";

export default function TransferPage() {
  const router = useRouter();

  return (
    <motion.div {...pageTransition}>
      <Typography variant="h2" mb={3}>
        Transfer
      </Typography>

      <Card sx={{ maxWidth: 520 }}>
        <CardContent>
          <Stack spacing={2.5}>
            <TextField label="From account" select defaultValue="main">
              <MenuItem value="main">Main Account (€18,520)</MenuItem>
              <MenuItem value="savings">Savings (€24,160)</MenuItem>
            </TextField>

            <TextField
              label="Recipient IBAN"
              placeholder="DE00 0000 0000 0000 0000 00"
              fullWidth
            />

            <TextField label="Recipient name" fullWidth />

            <TextField label="Amount (€)" type="number" fullWidth />

            <TextField
              label="Purpose"
              placeholder="e.g. Rent January"
              fullWidth
            />

            <Button
              variant="contained"
              size="large"
              onClick={() => router.push("/transfer/review")}
            >
              Continue
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </motion.div>
  );
}
