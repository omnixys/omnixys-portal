// components/hero/HeroSlide.tsx
import { Box, Button, Typography } from "@mui/material";

interface HeroSlideProps {
  title: string;
  subtitle: string;
  image: string;
}

export function HeroSlide({ title, subtitle, image }: HeroSlideProps) {
  return (
    <Box
      sx={{
        minWidth: "100%",
        display: "flex",
        alignItems: "center",
        px: 8,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography fontSize={36} fontWeight={700} lineHeight={1.2} mb={2}>
          {title}
        </Typography>

        <Typography color="text.secondary" mb={3}>
          {subtitle}
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#ff6a00",
            px: 4,
            py: 1.2,
            borderRadius: 999,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Buy now
        </Button>
      </Box>

      <Box sx={{ flex: 1, textAlign: "center" }}>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            maxHeight: 260,
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
}
