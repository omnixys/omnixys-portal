"use client";

import { Avatar, Box, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RepeatIcon from "@mui/icons-material/Repeat";
import { motion } from "framer-motion";
import { useOptimistic } from "react";
import { Post } from "../../lib/mock/posts";
import Link from "next/link";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useEffect, useState } from "react";


type Action = { type: "like" } | { type: "repost" } | { type: "bookmark" };

export default function PostCard({ post }: { post: Post }) {
  const showSensitive =
    typeof window !== "undefined" &&
    JSON.parse(localStorage.getItem("settings") ?? "{}")?.showSensitive;
  
  const [optimisticPost, updateOptimistic] = useOptimistic(
    post,
    (state: Post, action: Action): Post => {
      switch (action.type) {
        case "like":
          return {
            ...state,
            liked: !state.liked,
            likes: state.liked ? state.likes - 1 : state.likes + 1,
          };
        
        case "repost":
          return {
            ...state,
            reposted: !state.reposted,
            reposts: state.reposted ? state.reposts - 1 : state.reposts + 1,
          };

        case "bookmark":
          return {
            ...state,
            bookmarked: !state.bookmarked,
          };

        default:
          return state;
      }
    },
  );

  return (
    <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
      <Box display="flex" gap={2} py={2} borderBottom="1px solid #222">
        <Avatar src={optimisticPost.avatar} />

        <Box flex={1}>
          <Typography fontWeight={600}>{optimisticPost.user}</Typography>
          <Link
            href={`/feed/post/${optimisticPost.id}`}
            scroll={false} // 🔑 wichtig für Modal-UX
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Typography mb={1}>{optimisticPost.content}</Typography>
          </Link>

          {optimisticPost.image && (
            <Box position="relative" mb={1}>
              <Box
                component="img"
                src={optimisticPost.image}
                sx={{
                  width: "100%",
                  borderRadius: 2,
                  filter:
                    optimisticPost.sensitive && !showSensitive
                      ? "blur(16px)"
                      : "none",
                }}
              />

              {optimisticPost.sensitive && !showSensitive && (
                <Box
                  position="absolute"
                  inset={0}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  bgcolor="rgba(0,0,0,0.5)"
                  borderRadius={2}
                >
                  <Typography color="#fff" fontWeight={600}>
                    Sensitive content
                  </Typography>
                </Box>
              )}
            </Box>
          )}

          {/* Actions */}
          <Box display="flex" gap={3}>
            {/* Like */}
            <Box display="flex" alignItems="center">
              <IconButton
                size="small"
                onClick={() => updateOptimistic({ type: "like" })}
                sx={{
                  color: optimisticPost.liked ? "#f91880" : "inherit",
                  "&:hover": {
                    bgcolor: "rgba(249,24,128,0.1)",
                  },
                }}
              >
                {optimisticPost.liked ? (
                  <FavoriteIcon fontSize="small" />
                ) : (
                  <FavoriteBorderIcon fontSize="small" />
                )}
              </IconButton>

              {optimisticPost.likes > 0 && (
                <Typography
                  variant="caption"
                  sx={{
                    color: optimisticPost.liked ? "#f91880" : "text.secondary",
                  }}
                >
                  {optimisticPost.likes}
                </Typography>
              )}
            </Box>

            {/* Repost */}
            <Box display="flex" alignItems="center">
              <IconButton
                size="small"
                onClick={() => updateOptimistic({ type: "repost" })}
                sx={{
                  color: optimisticPost.reposted ? "#00ba7c" : "inherit",
                  "&:hover": {
                    bgcolor: "rgba(0,186,124,0.1)",
                  },
                }}
              >
                <RepeatIcon fontSize="small" />
              </IconButton>

              {optimisticPost.reposts > 0 && (
                <Typography
                  variant="caption"
                  sx={{
                    color: optimisticPost.reposted
                      ? "#00ba7c"
                      : "text.secondary",
                  }}
                >
                  {optimisticPost.reposts}
                </Typography>
              )}
            </Box>

            {/* Bookmark */}
            <Box display="flex" alignItems="center">
              <IconButton
                size="small"
                onClick={() => updateOptimistic({ type: "bookmark" })}
                sx={{
                  color: optimisticPost.bookmarked ? "#1d9bf0" : "inherit",
                  "&:hover": {
                    bgcolor: "rgba(29,155,240,0.1)",
                  },
                }}
              >
                {optimisticPost.bookmarked ? (
                  <BookmarkIcon fontSize="small" />
                ) : (
                  <BookmarkBorderIcon fontSize="small" />
                )}
              </IconButton>
            </Box>
          </Box>

          <IconButton size="small">
            <Typography variant="caption">Report</Typography>
          </IconButton>
          <IconButton size="small">
            <Typography variant="caption">Mute</Typography>
          </IconButton>
        </Box>
      </Box>
    </motion.div>
  );
}
