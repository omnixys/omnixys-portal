"use client";

import { Grid } from "@mui/material";
import { ProductCard } from "./ProductCard";

export const PRODUCTS = [
  {
    id: 1,
    name: "AirPods Max",
    price: 559,
    image: "/products/airpods-max.png",
    rating: 4.8,
    category: "audio",
  },
  {
    id: 2,
    name: "AirPods Max",
    price: 552,
    image: "/products/airpods-max.png",
    rating: 4.8,
    category: "audio",
  },
  {
    id: 3,
    name: "AirPods Max",
    price: 550,
    image: "/products/airpods-max.png",
    rating: 4.8,
    category: "audio",
  },
];

export function ProductGrid({ category }: { category?: string }) {
  const filtered = category
    ? PRODUCTS.filter((p) => p.category === category)
    : PRODUCTS;

  return (
    <Grid container spacing={3}>
      {PRODUCTS.map((p) => (
        <Grid sx={{ xs: 12, sm: 6, md: 3 }} key={p.id}>
          <ProductCard product={p} />
        </Grid>
      ))}
    </Grid>
  );
}
