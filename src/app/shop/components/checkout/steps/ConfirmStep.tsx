// components/checkout/steps/ConfirmStep.tsx
"use client";

import { CircularProgress, Typography } from "@mui/material";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function ConfirmStep() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/order-placed");
    }, 1500);
  }, [router]);

  return (
    <>
      <CircularProgress />
      <Typography mt={2}>Processing payment…</Typography>
    </>
  );
}
