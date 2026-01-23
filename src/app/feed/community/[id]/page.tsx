"use client";

import { Box, Button, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { communities } from "../../lib/mock/communities";
import { mockPosts } from "../../lib/mock/posts";
import PostCard from "../../components/feed/PostCard";

export default function CommunityPage() {
  const { id } = useParams<{ id: string }>();
  const community = communities.find((c) => c.id === id);
  const [followed, setFollowed] = useState(community?.followed);

  if (!community) return null;

  const posts = useMemo(
    () => mockPosts.filter((p) => p.community === community.id),
    [community.id],
  );

  return (
    <Box maxWidth={600} mx="auto">
      {/* Header */}
      <Box p={2} borderBottom="1px solid #222">
        <Typography fontWeight={700} fontSize={22}>
          {community.name}
        </Typography>
        {community.description && (
          <Typography color="text.secondary" mt={1}>
            {community.description}
          </Typography>
        )}

        <Button
          sx={{ mt: 1, borderRadius: 999 }}
          variant={followed ? "outlined" : "contained"}
          onClick={() => setFollowed((f) => !f)}
        >
          {followed ? "Following" : "Follow"}
        </Button>
      </Box>

      {/* Feed */}
      <Box>
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </Box>
    </Box>
  );
}
