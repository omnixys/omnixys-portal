import { Box, Grid } from "@mui/material";
import { OrderHeader } from "./OrderHeader";
import { OrderItems } from "./OrderItems";
import { OrderSummary } from "./OrderSummary";
import { Footer } from "../../components/layout/Footer";
import { OrderStatusTimeline } from "../../components/orders/OrderStatusTimeline";

// MOCK
const ORDER = {
  id: "ORD-2026-001",
  status: "Pending",
  date: "21.01.2026",
  items: [
    {
      id: 1,
      title: "Samsung Galaxy S23",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      price: 799.99,
      qty: 2,
      color: "Black",
    },
    {
      id: 2,
      title: "MacBook Pro 16",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      price: 2499.99,
      qty: 1,
      color: "Silver",
    },
  ],
  address: {
    name: "Caleb Gyamfi",
    street: "Main Street 12",
    city: "Berlin",
    zip: "10115",
    country: "Germany",
  },
  shipping: "Standard (Free)",
  payment: "Cash on Delivery",
  tax: 19,
  discount: 0,
};

export default function OrderDetailsPage() {
  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Box sx={{ maxWidth: 1300, mx: "auto", px: 3, py: 6 }}>
        <OrderHeader order={ORDER} />

        <OrderStatusTimeline
          currentStatus="Shipped"
          events={[
            { status: "Placed", timestamp: "21 Jan 2026, 10:12" },
            { status: "Processing", timestamp: "21 Jan 2026, 11:03" },
            {
              status: "Shipped",
              timestamp: "22 Jan 2026, 08:45",
              trackingId: "DHL-83920123",
            },
            { status: "Delivered" },
          ]}
        />

        <Grid container spacing={6}>
          <Grid sx={{ xs: 12, md: 8 }}>
            <OrderItems items={ORDER.items} />
          </Grid>

          <Grid sx={{ xs: 12, md: 4 }}>
            <OrderSummary order={ORDER} />
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
}
