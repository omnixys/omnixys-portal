// app/category/[slug]/page.tsx
import { Box } from "@mui/material";
import { PRODUCTS } from "../../mock/products";
import { CategoryHeader } from "../../components/category/CategoryHeader";
import { SectionHeading } from "../../components/ui/SectionHeading";
import { FilterBar } from "../../components/category/FilterBar";
import { SortSelect } from "../../components/category/SortSelect";
import { ProductGrid } from "../../components/product/ProductGrid";
import { Footer } from "../../components/footer/Footer";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
  }) {
  const { slug } = await params;
  const products = PRODUCTS; // später nach slug filtern

  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <CategoryHeader />

      <Box sx={{ maxWidth: 1300, mx: "auto", px: 3, py: 6 }}>
        <SectionHeading
          title="Featured"
          highlight="Products"
          subtitle="Our top picks just for you"
          underline
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <FilterBar />
          <SortSelect />
        </Box>

        <ProductGrid products={products} />
      </Box>

      <Footer />
    </Box>
  );
}
