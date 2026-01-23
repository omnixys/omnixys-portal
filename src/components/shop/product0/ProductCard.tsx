"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Rating,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    description: string;
    rating?: { rate: number; count: number };
  };
}

export function ProductCard({ product }: Props) {
  const router = useRouter();

  return (
    <Card sx={{ borderRadius: 4 }}>
      <Box sx={{ position: "relative", p: 2 }}>
        <IconButton sx={{ position: "absolute", right: 8, top: 8 }}>
          <FavoriteBorderIcon />
        </IconButton>

        <Image
          src={product.image}
          alt={product.title}
          width={220}
          height={220}
          style={{ objectFit: "contain" }}
        />
      </Box>

      <CardContent>
        <Typography fontWeight={600} noWrap>
          {product.title}
        </Typography>

        <Typography fontWeight={300} noWrap>
          {product.description}
        </Typography>

        {product.rating && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Rating
              value={product.rating.rate}
              precision={0.1}
              readOnly
              size="small"
            />
            <Typography variant="caption">({product.rating.count})</Typography>
          </Box>
        )}

        <Typography fontWeight={700} mt={1}>
          ${product.price}
        </Typography>

        <Button
          fullWidth
          variant="outlined"
          sx={{ mt: 2, borderRadius: 999 }}
          onClick={() => router.push(`/shop/product/${product.id}`)}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}
