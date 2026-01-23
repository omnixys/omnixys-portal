"use client";

import { Box, IconButton, Modal, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { mockPosts, Post } from "../../../lib/mock/posts";
import PostCard from "../../../components/feed/PostCard";
import ReplyBox from "../../../components/thread/ReplyBox";
import ThreadReplies from "../../../components/thread/ThreadReplies";

export default function ThreadModal() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const [posts, setPosts] = useState<Post[]>(mockPosts);

  const rootPost = posts.find((p) => p.id === id);
  if (!rootPost) return null;

  return (
    <Modal open onClose={() => router.back()}>
      <Box display="flex" justifyContent="center" mt={6} px={2}>
        <Paper
          sx={{
            width: 600,
            maxHeight: "85vh",
            overflowY: "auto",
            borderRadius: 3,
          }}
        >
          {/* Header */}
          <Box
            position="sticky"
            top={0}
            zIndex={1}
            bgcolor="background.paper"
            display="flex"
            justifyContent="flex-end"
            p={1}
            borderBottom="1px solid #222"
          >
            <IconButton onClick={() => router.back()}>
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Thread */}
          <Box p={2}>
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
        </Paper>
      </Box>
    </Modal>
  );
}
