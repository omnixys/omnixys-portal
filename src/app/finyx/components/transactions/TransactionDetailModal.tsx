"use client";

import {
  Dialog,
  DialogContent,
  Typography,
  Box,
  Stack,
  Divider,
  Chip,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReceiptUpload from "./ReceiptUpload";
import TransactionActions from "./TransactionActions";
import TransactionMeta from "./TransactionMeta";

export default function TransactionDetailModal({
  open,
  onClose,
  transaction,
}: {
  open: boolean;
  onClose: () => void;
  transaction: any;
}) {
  if (!transaction) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h3">{transaction.merchant}</Typography>

          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Typography
          variant="h2"
          color={transaction.amount > 0 ? "success.main" : "error.main"}
          mb={1}
        >
          {transaction.amount > 0 ? "+" : "-"}€
          {Math.abs(transaction.amount).toFixed(2)}
        </Typography>

        <Chip
          label={transaction.status}
          color={
            transaction.status === "success"
              ? "success"
              : transaction.status === "pending"
                ? "warning"
                : "error"
          }
          size="small"
        />

        <Divider sx={{ my: 3 }} />

        <Stack spacing={3}>
          <TransactionMeta transaction={transaction} />
          <TransactionActions />
          <ReceiptUpload />
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
