"use client";

import { Avatar, Box, Button, Paper, Stack, Typography } from "@mui/material";

const trending = [
  { title: "Nadal v Federer", category: "Sport" },
  { title: "OpenAI", category: "Technology" },
  { title: "Lionel Messi", category: "Sport" },
];

const suggestions = [
  { name: "Astro", handle: "@astrodotbuild" },
  { name: "Hugh Jackman", handle: "@RealHughJackman" },
  { name: "Tom Cruise", handle: "@TomCruise" },
];

export default function RightSidebar() {
  return (
    <Box
      width={340}
      position="sticky"
      top={0}
      height="100vh"
      display={{ xs: "none", lg: "block" }}
      pt={2}
    >
      {/* Trending */}
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography fontWeight={700} mb={1}>
          What’s happening
        </Typography>

        {trending.map((t) => (
          <Box key={t.title} mb={1}>
            <Typography variant="caption" color="text.secondary">
              {t.category} · Trending
            </Typography>
            <Typography fontWeight={600}>{t.title}</Typography>
          </Box>
        ))}
      </Paper>

      {/* Who to follow */}
      <Paper sx={{ p: 2 }}>
        <Typography fontWeight={700} mb={1}>
          Who to follow
        </Typography>

        <Stack spacing={2}>
          {suggestions.map((u) => (
            <Box
              key={u.handle}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box display="flex" gap={1}>
                <Avatar />
                <Box>
                  <Typography fontWeight={600}>{u.name}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {u.handle}
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="outlined"
                size="small"
                sx={{ borderRadius: 999 }}
              >
                Follow
              </Button>
            </Box>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
}
