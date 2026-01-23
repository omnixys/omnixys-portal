import { Box, Divider, Typography } from "@mui/material";
import Link from "next/link";
import { Footer } from "../components/layout/Footer";

// MOCK
const ORDERS = [
  {
    id: "ORD-2026-001",
    items: ["Samsung Galaxy S23 x2", "MacBook Pro 16 x1"],
    total: 4180.97,
    date: "21.01.2026",
    status: "Pending",
  },
];

export default function MyOrdersPage() {
  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Box sx={{ maxWidth: 1300, mx: "auto", px: 3, py: 6 }}>
        <Typography fontSize={22} fontWeight={700} mb={4}>
          My Orders
        </Typography>

        {ORDERS.map((o) => (
          <Box key={o.id}>
            <Link
              href={`/my-orders/${o.id}`}
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr auto",
                  gap: 3,
                  alignItems: "center",
                  py: 2,
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    backgroundColor: "#ffe5d9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    color: "#f36c21",
                  }}
                >
                  📦
                </Box>

                <Box>
                  <Typography fontWeight={600}>{o.items.join(", ")}</Typography>
                  <Typography fontSize={13} color="text.secondary">
                    Items: {o.items.length}
                  </Typography>
                </Box>

                <Box textAlign="right">
                  <Typography fontWeight={600}>
                    ${o.total.toFixed(2)}
                  </Typography>
                  <Typography fontSize={13} color="text.secondary">
                    {o.date} · {o.status}
                  </Typography>
                </Box>
              </Box>
            </Link>

            <Divider />
          </Box>
        ))}
      </Box>

      <Footer />
    </Box>
  );
}
