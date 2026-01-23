"use client";

import { Box } from "@mui/material";
import { useParams } from "next/navigation";
import { useState } from "react";
import { mockPosts, Post } from "../../lib/mock/posts";
import PostCard from "../../components/feed/PostCard";
import ReplyBox from "../../components/thread/ReplyBox";
import ThreadReplies from "../../components/thread/ThreadReplies";

export default function ThreadPage() {
  const { id } = useParams<{ id: string }>();
  const [posts, setPosts] = useState<Post[]>(mockPosts);

  const rootPost = posts.find((p) => p.id === id);
  if (!rootPost) return null;

  return (
    <Box maxWidth={600} mx="auto">
      <PostCard post={rootPost} />

      <ReplyBox
        parentId={rootPost.id}
        onReply={(reply) => setPosts((p) => [...p, reply])}
      />

      <ThreadReplies
        posts={posts}
        parentId={rootPost.id}
        onReply={(reply) => setPosts((p) => [...p, reply])}
      />
    </Box>
  );
}
