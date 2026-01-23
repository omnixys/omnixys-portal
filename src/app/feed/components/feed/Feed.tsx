"use client";

import { Box } from "@mui/material";
import { useMemo, useState } from "react";
import Stories from "./Stories";
import FeedTabs from "./FeedTabs";
import FeedList from "./FeedList";
import CreatePostBox from "./CreatePostBox";
import { mockPosts, Post } from "../../lib/mock/posts";
import { followingUserIds } from "../../lib/mock/following";
import VirtualFeedList from "./VirtualFeedList";

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [filter, setFilter] = useState<string>("For you");

  const filteredPosts = useMemo(() => {
    if (filter === "For you") return posts;

    if (filter === "Following") {
      return posts.filter((p) => followingUserIds.includes(p.authorId));
    }

    // Community
    return posts.filter((p) => p.community === filter);
  }, [posts, filter]);

  return (
    <Box flex={1} maxWidth={600}>
      <FeedTabs onChange={setFilter} />
      <Stories />

      <CreatePostBox onCreate={(post) => setPosts((p) => [post, ...p])} />

      {filteredPosts.length === 0 ? (
        <Box textAlign="center" py={4} color="text.secondary">
          No posts yet
        </Box>
      ) : (
          // <FeedList posts={filteredPosts} />
          <VirtualFeedList posts={filteredPosts} />
      )}
    </Box>
  );
}
