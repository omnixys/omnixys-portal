"use client";

import {
  ARCHIVE_NOTIFICATION,
  MARK_AS_READ,
} from "@/graphql/notification/notification.mutation";
import { MY_NOTIFICATIONS } from "@/graphql/notification/notification.query";
import { MarkAsReadResult } from "@/types/notification/notification-mutation-graphql.type";
import {
  ArchiveNotificationResult,
  MyNotificationResult,
} from "@/types/notification/notification-query-graphql.type";
import { useMutation, useQuery } from "@apollo/client/react";
import { Button, Card, CardContent, Stack, Typography } from "@mui/material";

export default function MyNotificationsPage() {
  const { data } = useQuery<MyNotificationResult>(MY_NOTIFICATIONS);
  const [markRead] = useMutation<MarkAsReadResult>(MARK_AS_READ);
  const [archive] =
    useMutation<ArchiveNotificationResult>(ARCHIVE_NOTIFICATION);

  return (
    <Stack spacing={2}>
      <Typography variant="h5">My Notifications</Typography>

      {data?.myNotifications.map((n) => (
        <Card key={n.id} sx={{ opacity: n.read ? 0.6 : 1 }}>
          <CardContent>
            <Typography variant="subtitle1">{n.renderedTitle}</Typography>
            <Typography variant="body2">{n.renderedBody}</Typography>

            <Stack direction="row" spacing={1} mt={2}>
              {!n.read && (
                <Button
                  size="small"
                  onClick={() =>
                    markRead({ variables: { notificationId: n.id } })
                  }
                >
                  Mark as read
                </Button>
              )}
              <Button
                size="small"
                onClick={() => archive({ variables: { notificationId: n.id } })}
              >
                Archive
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}
