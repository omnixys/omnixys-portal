"use client";

import { Box, Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  slug: string;
  title: string;
  items: number;
  image: string;
}

export function CategoryCard({ slug, title, items, image }: Props) {
  const router = useRouter();

  return (
    <Card
      onClick={() => router.push(`/category/${slug}`)}
      sx={{
        p: 2,
        borderRadius: 3,
        cursor: "pointer",
        boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
        transition: "all .2s ease",
        "&:hover": {
          boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Stack direction="row" spacing={2} alignItems="center">
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: 2,
            bgcolor: "#F5F5F5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={image} alt={title} width={36} height={36} />
        </Box>

        <Box>
          <Typography fontWeight={600}>{title}</Typography>
          <Typography variant="caption" color="text.secondary">
            {items} Items Available
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}
