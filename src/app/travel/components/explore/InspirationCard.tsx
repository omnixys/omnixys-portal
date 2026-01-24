"use client";

import { Typography, Stack, Box } from "@mui/material";
import { motion } from "framer-motion";
import { ExploreLocation } from "../../lib/explore/exploreTypes";
import { GlassCard } from "../ui/GlassCard";

interface Props {
  location: ExploreLocation;
}

export function InspirationCard({ location }: Props) {
  return (
    <motion.div whileHover={{ scale: 1.03 }}>
      <GlassCard>
        <Stack spacing={1}>
          <Box
            sx={{
              height: 160,
              borderRadius: 3,
              backgroundImage: `url(${location.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Typography fontWeight={600}>{location.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {location.description}
          </Typography>
        </Stack>
      </GlassCard>
    </motion.div>
  );
}
