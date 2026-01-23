"use client";

import { Card, CardContent, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

export default function BalanceCard() {
  return (
  //  x
    <motion.div whileHover={{ y: -4 }}>
      <Card>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Total Balance
          </Typography>

          <Typography variant="h1" mt={1}>
            €42,680.50
          </Typography>

          <Box mt={2}>
            <Typography variant="body2" color="success.main">
              +€1,240.30 this month
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
}
