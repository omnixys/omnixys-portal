// components/category/CategoryGrid.tsx
import { Grid } from "@mui/material";
import { CategoryCard } from "./CategoryCard";
import { CategoryCard as CategoryCardType } from "../../types";

const getSize = (index: number) => {
  const pattern = [4, 8, 8, 4];
  return pattern[index % pattern.length];
};

export function CategoryGrid({
  categories,
}: {
  categories: CategoryCardType[];
}) {
  return (
    <Grid container spacing={4}>
      {categories.map((cat, i) => (
        <Grid size={getSize(i)} sx={{ xs: 12, md: 6 }} key={cat.title}>
          <CategoryCard {...cat} />
        </Grid>
      ))}
    </Grid>
  );
}
