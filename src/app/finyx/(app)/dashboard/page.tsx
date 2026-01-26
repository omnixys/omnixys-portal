"use client";

import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { pageTransition } from "../../lib/motion";
import BalanceCard from "../../components/dashboard/BalanceCard";
import AccountsCard from "../../components/dashboard/AccountsCard";
import CashflowChart from "../../components/dashboard/CashflowChart";
import RecentTransactions from "../../components/dashboard/RecentTransactions";

export default function DashboardPage() {
  return (
    <motion.div {...pageTransition}>
      <Typography variant="h2" mb={4}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid sx={{ xs: 12, md: 6 }}>
          <BalanceCard />
        </Grid>

        <Grid sx={{ xs: 12, md: 6 }}>
          <AccountsCard />
        </Grid>

        <Grid sx={{ xs: 12, lg: 8 }}>
          <CashflowChart />
        </Grid>

        <Grid sx={{ xs: 12, lg: 8 }}>
          <RecentTransactions />
        </Grid>
      </Grid>
    </motion.div>
  );
}
