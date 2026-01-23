"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { MenuButton } from "../MenuButton";

export function UtilityBar() {
  return (
    <Box sx={{ bgcolor: "#0F4A3C", color: "#fff" }}>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ height: 36 }}
        >
          {/* Left */}
          <Stack direction="row" spacing={1} alignItems="center">
            <PhoneIcon sx={{ fontSize: 16 }} />
            <Typography variant="caption">+01234567890</Typography>
          </Stack>

          {/* Center */}
          <Typography variant="caption">
            Get 50% Off on Selected Items&nbsp;|&nbsp;
            <strong>Shop Now</strong>
          </Typography>

          {/* Right */}
          <Stack direction="row" spacing={2}>
            <MenuButton label="Language" items={[{ label: "English" }, { label: "German" }]} />
                  <MenuButton label="Location" items={[]} />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
