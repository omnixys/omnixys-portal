"use client";

import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { CategoriesMenu } from "./CategoriesMenu";
import { MainNav } from "./MainNav";
import { SearchBar } from "./SearchBar";
import { CartButton } from "../cart/CartButton";

export function Header() {
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        bgcolor: "#fff",
        borderBottom: "1px solid #eee",
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="center"
          spacing={3}
          sx={{ height: 72 }}
        >
          {/* Logo */}
          <Typography fontWeight={800} fontSize={20}>
            Shopcart
          </Typography>

          {/* Nav */}
          <Stack direction="row" spacing={2} alignItems="center">
            <CategoriesMenu />
            <MainNav />
          </Stack>

          {/* Spacer */}
          <Box flex={1} />

          {/* Search */}
          <SearchBar />

          {/* Account + Cart */}
          <IconButton>
            <PersonOutlineIcon />
          </IconButton>
          <CartButton />
        </Stack>
      </Container>
    </Box>
  );
}
