// components/product/FeaturedCarousel.tsx
"use client";

import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { Product } from "../../types";
import { ProductCard } from "./ProductCard";
import { SectionHeading } from "../ui/SectionHeading";

export function FeaturedCarousel({ products }: { products: Product[] }) {
  return (
    <Box sx={{ overflow: "hidden", mt: 10 }}>
      <SectionHeading
        title="Featured"
        highlight="Products"
        subtitle="Our top picks just for you"
        underline
      />

      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
        style={{ display: "flex", gap: 24 }}
      >
        {[...products, ...products].map((p, i) => (
          <Box key={i} sx={{ minWidth: 280 }}>
            <ProductCard product={p} />
          </Box>
        ))}
      </motion.div>
    </Box>
  );
}
