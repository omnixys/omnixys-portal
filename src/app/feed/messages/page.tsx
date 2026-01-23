"use client";

import { Box } from "@mui/material";
import { useState } from "react";
import { Conversation, Message, mockConversations, mockMessages } from "../lib/mock/messages";
import ChatWindow from "../components/messages/ChatWindow";
import ConversationsList from "../components/messages/ConversationsList";

export default function MessagesPage() {
  const [conversations] = useState<Conversation[]>(mockConversations);
  const [messages, setMessages] = useState<Message[]>(mockMessages);
  const [activeId, setActiveId] = useState<string | null>(
    conversations[0]?.id ?? null,
  );

  const activeConversation = conversations.find((c) => c.id === activeId);
  const conversationMessages = messages.filter(
    (m) => m.conversationId === activeId,
  );

  return (
    <Box
      maxWidth={1000}
      mx="auto"
      mt={2}
      display="flex"
      height="75vh"
      border="1px solid #222"
      borderRadius={2}
      overflow="hidden"
    >
      <ConversationsList
        conversations={conversations}
        activeId={activeId}
        onSelect={setActiveId}
      />

      {activeConversation && (
        <ChatWindow
          conversation={activeConversation}
          messages={conversationMessages}
          onSend={(data) =>
            setMessages((m) => [
              ...m,
              {
                id: crypto.randomUUID(),
                conversationId: activeConversation.id,
                senderId: "me",
                content: data.content,
                image: data.image,
                createdAt: "now",
              },
            ])
          }
        />
      )}
    </Box>
  );
}
