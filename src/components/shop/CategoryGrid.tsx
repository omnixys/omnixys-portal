"use client";

import { Grid, Typography, Box } from "@mui/material";
import { CategoryCard } from "./CategoryCard";
import { CategorySkeleton } from "./CategorySkeleton";
import { useEffect, useState } from "react";

interface Category {
  slug: string;
  title: string;
  items: number;
  image: string;
}

export function CategoryGrid() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // Simulierter API-Call
    setTimeout(() => {
      setCategories([
        {
          slug: "furniture",
          title: "Furniture",
          items: 240,
          image: "/categories/furniture.png",
        },
        {
          slug: "headphone",
          title: "Headphone",
          items: 240,
          image: "/categories/headphone.png",
        },
        {
          slug: "shoe",
          title: "Shoe",
          items: 240,
          image: "/categories/shoe.png",
        },
        { slug: "bag", title: "Bag", items: 240, image: "/categories/bag.png" },
        {
          slug: "laptop",
          title: "Laptop",
          items: 240,
          image: "/categories/laptop.png",
        },
        {
          slug: "book",
          title: "Book",
          items: 240,
          image: "/categories/book.png",
        },
      ]);
      setLoading(false);
    }, 900);
  }, []);

  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h6" fontWeight={700} mb={3}>
        Popular Categories
      </Typography>

      <Grid container spacing={2}>
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <Grid sx={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={i}>
                <CategorySkeleton />
              </Grid>
            ))
          : categories.map((cat, i) => (
              <Grid sx={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={i}>
                <CategoryCard {...cat} />
              </Grid>
            ))}
      </Grid>
    </Box>
  );
}
