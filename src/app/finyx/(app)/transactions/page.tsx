"use client";

import { Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import TransactionsFilterBar from "../../components/transactions/TransactionsFilterBar";
import TransactionsTable from "../../components/transactions/TransactionsTable";
import { pageTransition } from "../../lib/motion";


export default function TransactionsPage() {
  return (
    <motion.div {...pageTransition}>
      <Stack spacing={3}>
        <Typography variant="h2">Transactions</Typography>

        <TransactionsFilterBar />

        <TransactionsTable />
      </Stack>
    </motion.div>
  );
}
