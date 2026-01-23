// app/product/[id]/page.tsx
import { Box, Grid, Typography } from "@mui/material";
import { PRODUCTS } from "../../mock/products";
import { ProductGallery } from "../../components/product/ProductGallery";
import { ProductInfo } from "../../components/product/ProductInfo";
import { FeaturedCarousel } from "../../components/product/FeaturedCarousel";
import { Footer } from "../../components/layout/Footer";



export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === Number(id));

  if (!product) return null;

  return (
    <Box sx={{ backgroundColor: "#fff", py: 6 }}>
      <Box
        sx={{
          maxWidth: 1400,
          mx: "auto",
          px: { xs: 2, md: 4 },
        }}
      >
        <Grid container spacing={6}>
          {/* LEFT – Images */}
          <Grid sx={{ xs: 12, md: 6 }}>
            <ProductGallery images={[product.image]} />
          </Grid>

          {/* RIGHT – Info */}
          <Grid sx={{ xs: 12, md: 6 }}>
            <ProductInfo product={product} />
          </Grid>
        </Grid>

        <Typography fontSize={28} fontWeight={700} mb={3}>
          Featured Products
        </Typography>

        <FeaturedCarousel products={PRODUCTS.slice(0, 5)} />

        <Footer />
      </Box>
    </Box>
  );
}
