// app/order-placed/page.tsx
"use client";

import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OrderPlacedPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, [router]);

  return (
    <Box sx={{ textAlign: "center", mt: 20 }}>
      <Typography fontSize={22} fontWeight={700}>
        Order Placed Successfully
      </Typography>
    </Box>
  );
}
