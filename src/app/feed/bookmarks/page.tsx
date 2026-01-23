"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { mockPosts, Post } from "../lib/mock/posts";
import PostCard from "../components/feed/PostCard";

export default function BookmarksPage() {
  const [posts] = useState<Post[]>(mockPosts);
  const bookmarked = posts.filter((p) => p.bookmarked);

  return (
    <Box maxWidth={600} mx="auto" mt={2}>
      <Typography fontWeight={700} fontSize={20} mb={2}>
        Bookmarks
      </Typography>

      {bookmarked.length === 0 ? (
        <Typography color="text.secondary">
          You haven’t bookmarked any posts yet.
        </Typography>
      ) : (
        bookmarked.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </Box>
  );
}
