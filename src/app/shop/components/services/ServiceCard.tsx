// components/services/ServiceCard.tsx
"use client";

import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ServiceItem } from "../../types";

export function ServiceCard({ title, description, icon }: ServiceItem) {
  return (
    <Box
      component={motion.div}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      sx={{
        p: 4,
        height: "100%",
        borderRadius: 3,
        backgroundColor: "#fff",
        //boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          width: 56,
          height: 56,
          mx: "auto",
          mb: 2,
          borderRadius: "50%",
          backgroundColor: "#f5f5f7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </Box>

      <Typography fontSize={16} fontWeight={700} mb={1}>
        {title}
      </Typography>

      <Typography fontSize={14} color="text.secondary">
        {description}
      </Typography>
    </Box>
  );
}
