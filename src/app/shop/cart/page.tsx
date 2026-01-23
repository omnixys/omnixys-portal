// app/cart/page.tsx
import { Box, Grid } from "@mui/material";
import { PRODUCTS } from "../mock/products";
import { CartList } from "../components/cart/CartList";
import { CartSummary } from "../components/cart/CartSummary";
import { Footer } from "../components/footer/Footer";

export default function CartPage() {
  // MOCK – später aus Store (Zustand)
  const cartItems = PRODUCTS.slice(0, 2).map((p) => ({
    ...p,
    quantity: 1,
    color: "Black",
  }));

  return (
    <Box sx={{ backgroundColor: "#fff", minHeight: "100vh" }}>
      <Box sx={{ maxWidth: 1300, mx: "auto", px: 3, py: 6 }}>
        <Grid container spacing={6}>
          {/* LEFT – Cart items */}
          <Grid size={8} sx={{ xs: 12, md: 8 }}>
            <CartList items={cartItems} />
          </Grid>

          {/* RIGHT – Summary */}
          <Grid size={4} sx={{ xs: 12, md: 4 }}>
            <CartSummary items={cartItems} />
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
}
