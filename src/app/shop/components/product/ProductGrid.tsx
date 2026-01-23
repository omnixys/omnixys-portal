import { Grid } from "@mui/material";
import { ProductCard } from "./ProductCard";
import { Product } from "../../types";
import { ProductCardSkeleton } from "./ProductCardSkeleton";

export function ProductGrid({
  products,
  loading,
}: {
  products: Product[];
  loading: boolean;
}) {
  return (
    <Grid container spacing={3}>
      {products.map((p) => (
        <Grid size={3} sx={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={p.id}>
          {loading ? <ProductCardSkeleton /> : <ProductCard product={p} />}
        </Grid>
      ))}
    </Grid>
  );
}
