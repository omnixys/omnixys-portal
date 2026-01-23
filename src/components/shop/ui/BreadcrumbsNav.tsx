"use client";

import { Breadcrumbs, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NextLink from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

export function BreadcrumbsNav({ items }: { items: Crumb[] }) {
  return (
    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />}>
      {items.map((c, i) =>
        c.href ? (
          <Link
            key={i}
            component={NextLink}
            href={c.href}
            underline="hover"
            color="inherit"
          >
            {c.label}
          </Link>
        ) : (
          <Typography key={i} color="text.primary" fontWeight={600}>
            {c.label}
          </Typography>
        ),
      )}
    </Breadcrumbs>
  );
}
