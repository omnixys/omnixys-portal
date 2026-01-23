"use client";

import { Avatar, Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { Post } from "../../lib/mock/posts";

type Props = {
  parentId: string;
  onReply: (post: Post) => void;
};

export default function ReplyBox({ parentId, onReply }: Props) {
  const [text, setText] = useState("");

  if (!text && parentId !== undefined) {
    // collapsed by default UX (like X)
  }

  return (
    <Box display="flex" gap={2} py={1}>
      <Avatar src="https://i.pravatar.cc/150?img=12" />

      <Box flex={1}>
        <TextField
          fullWidth
          size="small"
          placeholder="Post your reply"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Box display="flex" justifyContent="flex-end" mt={1}>
          <Button
            size="small"
            variant="contained"
            disabled={!text.trim()}
            onClick={() => {
              onReply({
                id: crypto.randomUUID(),
                user: "Lama Dev",
                avatar: "https://i.pravatar.cc/150?img=12",
                content: text,
                likes: 0,
                reposts: 0,
                parentId,
              });
              setText("");
            }}
            sx={{ borderRadius: 999 }}
          >
            Reply
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
