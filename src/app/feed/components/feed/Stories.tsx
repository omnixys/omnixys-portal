"use client";

import { Avatar, Box, Typography } from "@mui/material";

const stories = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  name: `User ${i}`,
  avatar: `https://i.pravatar.cc/150?img=${i + 10}`,
}));

export default function Stories() {
  return (
    <Box display="flex" gap={2} overflow="auto" py={2}>
      {stories.map((s) => (
        <Box key={s.id} textAlign="center">
          <Avatar
            src={s.avatar}
            sx={{
              width: 56,
              height: 56,
              border: "2px solid #1d9bf0",
            }}
          />
          <Typography variant="caption">{s.name}</Typography>
        </Box>
      ))}
    </Box>
  );
}
