// components/footer/FooterColumn.tsx
import { Box, Typography } from "@mui/material";
import Link from "next/link";

export function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <Box>
      <Typography fontWeight={700} mb={2}>
        {title}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {links.map((link) => (
          <Link href={link.href} style={{ textDecoration: 'none' }}>
  <Typography
    fontSize={14}
    color="text.secondary"
    sx={{ '&:hover': { color: '#000' } }}
  >
    {link.label}
  </Typography>
</Link>
        ))}
      </Box>
    </Box>
  );
}
