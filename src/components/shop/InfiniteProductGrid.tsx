"use client";

import { Box, CircularProgress, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { ProductCard } from "./product0/ProductCard";

export function InfiniteProductGrid({ category }: { category: string }) {
  const [page, setPage] = useState(1);
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    load();
  }, [page]);

  async function load() {
    setLoading(true);
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${category}`,
    );
    const data = await res.json();

    // fakestoreapi hat keine echte pagination → simuliert
    setItems((prev) => [...prev, ...data.slice((page - 1) * 4, page * 4)]);
    setLoading(false);
  }

  return (
    <>
      <Grid container spacing={3}>
        {items.map((p) => (
          <Grid sx={{ xs: 12, sm: 6, md: 3 }} key={`${p.id}-${Math.random()}`}>
            <ProductCard product={p} />
          </Grid>
        ))}
      </Grid>

      <Box textAlign="center" mt={4}>
        {loading ? (
          <CircularProgress />
        ) : (
          <button onClick={() => setPage((p) => p + 1)}>Load more</button>
        )}
      </Box>
    </>
  );
}
