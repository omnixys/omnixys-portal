import { gql } from "@apollo/client";

export const MARK_AS_READ = gql`
  mutation MarkNotificationAsRead($notificationId: ID!) {
    markNotificationAsRead(notificationId: notificationId)
}
`;


export const ARCHIVE_NOTIFICATION = gql`
  mutation ArchiveNotification($notificationId: ID!) {
    archiveNotification(notificationId: notificationId)
}
`;