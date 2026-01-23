"use client";

import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { mockPosts, Post } from "../../lib/mock/posts";
import PostCard from "./PostCard";

export default function FeedList({ posts }: { posts: Post[] }) {
  const [visible, setVisible] = useState(5);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 300
      ) {
        setVisible((v) => Math.min(v + 5, posts.length));
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [posts.length]);

  return (
    <Box>
      {posts.slice(0, visible).map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </Box>
  );
}