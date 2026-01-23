"use client";

import { Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import BudgetOverview from "../../components/analytics/BudgetOverview";
import CategoryDonut from "../../components/analytics/CategoryDonut";
import InsightsCard from "../../components/analytics/InsightsCard";
import MonthlyTrend from "../../components/analytics/MonthlyTrend";
import { pageTransition } from "../../lib/motion";

export default function AnalyticsPage() {
  return (
    <motion.div {...pageTransition}>
      <Typography variant="h2" mb={4}>
        Analytics
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <CategoryDonut />
        </Grid>

        <Grid item xs={12} lg={8}>
          <MonthlyTrend />
        </Grid>

        <Grid item xs={12} md={6}>
          <BudgetOverview />
        </Grid>

        <Grid item xs={12} md={6}>
          <InsightsCard />
        </Grid>
      </Grid>
    </motion.div>
  );
}
