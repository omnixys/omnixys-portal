"use client";

import { Box, Typography } from "@mui/material";

export default function TransactionMeta({ transaction }: { transaction: any }) {
  return (
    <Box>
      <MetaRow label="Date" value={transaction.date} />
      <MetaRow label="Category" value={transaction.category} />
      <MetaRow label="Account" value="Main Account" />
      <MetaRow label="Reference" value="TX-3921048" />
    </Box>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <Box display="flex" justifyContent="space-between" mb={1}>
      <Typography color="text.secondary">{label}</Typography>
      <Typography fontWeight={500}>{value}</Typography>
    </Box>
  );
}
