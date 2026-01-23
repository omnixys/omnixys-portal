"use client";

import { Box, Typography } from "@mui/material";
import MessageInput from "./MessageInput";
import { Conversation, Message } from "../../lib/mock/messages";

type Props = {
  conversation: Conversation;
  messages: Message[];
  onSend: (data: { content?: string; image?: string }) => void;
};

export default function ChatWindow({ conversation, messages, onSend }: Props) {
  return (
    <Box flex={1} display="flex" flexDirection="column">
      {/* Header */}
      <Box p={2} borderBottom="1px solid #222">
        <Typography fontWeight={700}>{conversation.user.name}</Typography>
        <Typography variant="caption" color="text.secondary">
          {conversation.user.handle}
        </Typography>
      </Box>

      {/* Messages */}
      <Box
        flex={1}
        p={2}
        overflow="auto"
        display="flex"
        flexDirection="column"
        gap={1}
      >
        {messages.map((m) => (
          <Box
            key={m.id}
            alignSelf={m.senderId === "me" ? "flex-end" : "flex-start"}
            bgcolor={
              m.senderId === "me"
                ? "rgba(29,155,240,0.15)"
                : "rgba(255,255,255,0.08)"
            }
            px={2}
            py={1}
            borderRadius={2}
            maxWidth="70%"
          >
            {m.image && (
              <Box
                component="img"
                src={m.image}
                sx={{
                  width: 220,
                  borderRadius: 2,
                  mb: m.content ? 1 : 0,
                }}
              />
            )}

            {m.content && <Typography>{m.content}</Typography>}

            <Typography variant="caption" color="text.secondary">
              {m.createdAt}
            </Typography>
          </Box>
        ))}
      </Box>

      <MessageInput onSend={onSend} />
    </Box>
  );
}
