"use client";

import { Avatar, Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import { useMemo, useState } from "react";
import { mockUsers } from "../../lib/mock/users";
import { mockPosts } from "../../lib/mock/posts";
import PostCard from "../../components/feed/PostCard";


export default function ProfilePage() {
  const { id } = useParams<{ id: string }>();
  const user = mockUsers.find((u) => u.id === id);
  const [tab, setTab] = useState(0);
  const [following, setFollowing] = useState(user?.following);

  if (!user) return null;

  const posts = useMemo(
    () => mockPosts.filter((p) => p.authorId === user.id && !p.parentId),
    [user.id],
  );

  const replies = useMemo(
    () => mockPosts.filter((p) => p.authorId === user.id && p.parentId),
    [user.id],
  );

  const media = useMemo(
    () => mockPosts.filter((p) => p.authorId === user.id && p.image),
    [user.id],
  );

  const data = [posts, replies, media][tab];

  return (
    <Box maxWidth={600} mx="auto">
      {/* Header */}
      <Box p={2} borderBottom="1px solid #222">
        <Avatar src={user.avatar} sx={{ width: 80, height: 80 }} />
        <Typography fontWeight={700} fontSize={20}>
          {user.name}
        </Typography>
        <Typography color="text.secondary">{user.handle}</Typography>
        {user.bio && <Typography mt={1}>{user.bio}</Typography>}

        <Button
          variant={following ? "outlined" : "contained"}
          sx={{ mt: 1, borderRadius: 999 }}
          onClick={() => setFollowing((f) => !f)}
        >
          {following ? "Following" : "Follow"}
        </Button>
      </Box>

      {/* Tabs */}
      <Tabs value={tab} onChange={(_, v) => setTab(v)}>
        <Tab label="Posts" />
        <Tab label="Replies" />
        <Tab label="Media" />
      </Tabs>

      {/* Content */}
      <Box>
        {data.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </Box>
    </Box>
  );
}
