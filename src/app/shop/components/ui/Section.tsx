// components/ui/Section.tsx
import { Box, Typography } from "@mui/material";

export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ maxWidth: 1280, mx: "auto", px: 3, mt: 8 }}>
      <Typography fontSize={24} fontWeight={700} mb={4}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}
