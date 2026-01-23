"use client";

import { Box, Tab, Tabs, TextField, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { mockPosts } from "../lib/mock/posts";
import { mockConversations, mockMessages } from "../lib/mock/messages";
import PostCard from "../components/feed/PostCard";


export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState(0);

  const posts = useMemo(
    () =>
      mockPosts.filter((p) =>
        p.content.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );

  const users = useMemo(
    () =>
      mockConversations.filter((c) =>
        c.user.name.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );

  const messages = useMemo(
    () =>
      mockMessages.filter((m) =>
        m.content?.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );

  return (
    <Box maxWidth={600} mx="auto" mt={2}>
      <TextField
        fullWidth
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mt: 2 }}>
        <Tab label="Posts" />
        <Tab label="Users" />
        <Tab label="Messages" />
      </Tabs>

      <Box mt={2}>
        {tab === 0 && posts.map((p) => <PostCard key={p.id} post={p} />)}

        {tab === 1 &&
          users.map((u) => (
            <Typography key={u.id} fontWeight={600}>
              {u.user.name} ({u.user.handle})
            </Typography>
          ))}

        {tab === 2 &&
          messages.map((m) => <Typography key={m.id}>{m.content}</Typography>)}
      </Box>
    </Box>
  );
}
