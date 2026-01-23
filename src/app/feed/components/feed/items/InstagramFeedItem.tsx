"use client";

import { Avatar, Box, IconButton, TextField, Typography } from "@mui/material";
import { formatTimeAgo } from "../../../lib/utils/time";
import SensitiveImage from "../SensitiveImage";
import { Post } from "../../../lib/mock/posts";
import { useOptimisticPost } from "../../../hooks/useOptimisticPost";

export default function InstagramFeedItem({ post }: { post: Post }) {
  const {
    post: p,
    revealedSensitive,
    revealSensitive,
  } = useOptimisticPost(post);

  return (
    <Box borderBottom="1px solid #e6e6e6" pb={2}>
      {/* Header */}
      <Box display="flex" alignItems="center" gap={1} px={2} py={1}>
        <Avatar src={p.avatar} />
        <Typography fontWeight={600}>{p.username}</Typography>
        <Typography color="text.secondary">
          · {formatTimeAgo(p.createdAt)}
        </Typography>
      </Box>

      {/* Image */}
      {p.image && (
        <SensitiveImage
          src={p.image}
          sensitive={p.sensitive}
          revealed={revealedSensitive}
          onReveal={revealSensitive}
          aspectRatio="4 / 5"
        />
      )}

      {/* Actions */}
      <Box px={2} mt={1} display="flex" gap={2}>
        <IconButton>❤️</IconButton>
        <IconButton>💬</IconButton>
        <IconButton>📤</IconButton>
        <Box flex={1} />
        <IconButton>🔖</IconButton>
      </Box>

      {/* Content */}
      <Box px={2} mt={1}>
        <Typography>
          <strong>{p.username}</strong> {p.content}
        </Typography>
      </Box>

      {/* Comment */}
      <Box px={2} mt={1}>
        <TextField
          fullWidth
          size="small"
          placeholder="Add a comment…"
          variant="standard"
        />
      </Box>
    </Box>
  );
}
