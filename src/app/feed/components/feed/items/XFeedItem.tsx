"use client";

import { Avatar, Box, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RepeatIcon from "@mui/icons-material/Repeat";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

import { formatTimeAgo } from "../../../lib/utils/time";
import SensitiveImage from "../SensitiveImage";
import { Post } from "../../../lib/mock/posts";
import { useOptimisticPost } from "../../../hooks/useOptimisticPost";

export default function XFeedItem({ post }: { post: Post }) {
  const {
    post: p,
    act,
    revealedSensitive,
    revealSensitive,
  } = useOptimisticPost(post);

  return (
    <Box
      display="grid"
      gridTemplateColumns="48px 1fr"
      gap={1.5}
      px={2}
      py={1.5}
      borderBottom="1px solid #e6e6e6"
    >
      <Avatar src={p.avatar} />

      <Box>
        {/* Header */}
        <Box display="flex" gap={1} alignItems="center">
          <Typography fontWeight={600}>{p.fullName}</Typography>
          <Typography color="text.secondary">@{p.username}</Typography>
          <Typography color="text.secondary">
            · {formatTimeAgo(p.createdAt)}
          </Typography>
        </Box>

        {/* Content */}
        <Typography mt={0.5}>{p.content}</Typography>

        {/* Image */}
        {p.image && (
          <Box mt={1}>
            <SensitiveImage
              src={p.image}
              sensitive={p.sensitive}
              revealed={revealedSensitive}
              onReveal={revealSensitive}
            />
          </Box>
        )}

        {/* Actions */}
        <Box display="flex" gap={4} mt={1}>
          <IconButton size="small" onClick={() => act({ type: "like" })}>
            {p.liked ? (
              <FavoriteIcon fontSize="small" color="error" />
            ) : (
              <FavoriteBorderIcon fontSize="small" />
            )}
          </IconButton>

          <IconButton size="small" onClick={() => act({ type: "repost" })}>
            <RepeatIcon
              fontSize="small"
              color={p.reposted ? "success" : "inherit"}
            />
          </IconButton>

          <IconButton size="small" onClick={() => act({ type: "bookmark" })}>
            {p.bookmarked ? (
              <BookmarkIcon fontSize="small" />
            ) : (
              <BookmarkBorderIcon fontSize="small" />
            )}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
