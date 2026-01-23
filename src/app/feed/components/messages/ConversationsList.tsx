"use client";

import { Avatar, Box, Typography } from "@mui/material";
import { Conversation } from "../../lib/mock/messages";

type Props = {
  conversations: Conversation[];
  activeId: string | null;
  onSelect: (id: string) => void;
};

export default function ConversationsList({
  conversations,
  activeId,
  onSelect,
}: Props) {
  return (
    <Box width={300} borderRight="1px solid #222" overflow="auto">
      {conversations.map((c) => (
        <Box
          key={c.id}
          display="flex"
          gap={2}
          p={2}
          sx={{
            cursor: "pointer",
            bgcolor:
              c.id === activeId
                ? "rgba(29,155,240,0.1)"
                : c.unread
                  ? "rgba(29,155,240,0.05)"
                  : "transparent",
          }}
          onClick={() => onSelect(c.id)}
        >
          <Avatar src={c.user.avatar} />
          <Box>
            <Typography fontWeight={600}>{c.user.name}</Typography>
            <Typography variant="caption" color="text.secondary">
              {c.lastMessage}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
