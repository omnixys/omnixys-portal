
import { Box, Divider, Grid, Typography } from "@mui/material";
import { FooterColumn } from "./FooterColumn";

export function Footer() {
  return (
    <Box sx={{ mt: 10, backgroundColor: "#fafafa" }}>
      <Box sx={{ maxWidth: 1280, mx: "auto", px: 4, py: 8 }}>
        <Grid container spacing={6}>
          {/* Brand */}
          <Grid sx={{ xs: 12, md: 4 }}>
            <Typography fontSize={20} fontWeight={700} mb={2}>
              QuickCart
            </Typography>
            <Typography fontSize={14} color="text.secondary" maxWidth={260}>
              Your one-stop shop for modern lifestyle products and accessories.
            </Typography>
          </Grid>

          {/* Columns */}
          <Grid sx={{ xs: 6, md: 2 }}>
            <FooterColumn
              title="Company"
              links={[
                { label: "About", href: "/about" },
                { label: "Careers", href: "/careers" },
                { label: "Blog", href: "/blog" },
              ]}
            />
          </Grid>

          <Grid sx={{ xs: 6, md: 2 }}>
            <FooterColumn
              title="Support"
              links={[
                { label: "Help Center", href: "/help" },
                { label: "Returns", href: "/returns" },
                { label: "Shipping", href: "/shipping" },
              ]}
            />
          </Grid>

          <Grid sx={{ xs: 6, md: 2 }}>
            <FooterColumn
              title="Legal"
              links={[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ]}
            />
          </Grid>
        </Grid>

        <Divider sx={{ my: 6 }} />

        <Typography fontSize={13} color="text.secondary" textAlign="center">
          © {new Date().getFullYear()} QuickCart. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}
