"use client";

import { Avatar, Box, Typography } from "@mui/material";
import { useState } from "react";
import { mockNotifications, Notification } from "../lib/mock/notifications";

export default function NotificationsPage() {
  const [notifications] = useState<Notification[]>(mockNotifications);

  return (
    <Box maxWidth={600} mx="auto" mt={2}>
      <Typography fontWeight={700} fontSize={20} mb={2}>
        Notifications
      </Typography>

      {notifications.map((n) => (
        <Box
          key={n.id}
          display="flex"
          gap={2}
          py={2}
          px={2}
          bgcolor={n.read ? "transparent" : "rgba(29,155,240,0.08)"}
          borderBottom="1px solid #222"
        >
          <Avatar src={n.avatar} />

          <Box>
            <Typography>
              <strong>{n.user}</strong> {n.type === "like" && "liked your post"}
              {n.type === "reply" && "replied to your post"}
              {n.type === "follow" && "followed you"}
              {n.type === "repost" && "reposted your post"}
            </Typography>

            <Typography variant="caption" color="text.secondary">
              {n.createdAt}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
