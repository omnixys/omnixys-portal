"use client";

import { Box } from "@mui/material";
import PostCard from "../feed/PostCard";
import { Post } from "../../lib/mock/posts";
import ReplyBox from "./ReplyBox";

type Props = {
  posts: Post[];
  parentId: string;
  onReply: (post: Post) => void;
};

export default function ThreadReplies({ posts, parentId, onReply }: Props) {
  const replies = posts.filter((p) => p.parentId === parentId);

  return (
    <Box ml={3}>
      {replies.map((reply) => (
        <Box key={reply.id}>
          <PostCard post={reply} />

          <ReplyBox parentId={reply.id} onReply={onReply} />

          <ThreadReplies posts={posts} parentId={reply.id} onReply={onReply} />
        </Box>
      ))}
    </Box>
  );
}
