export type Notification = {
  id: string;
  type: "like" | "reply" | "follow" | "repost";
  user: string;
  avatar: string;
  postId?: string;
  createdAt: string;
  read?: boolean;
};

export const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "like",
    user: "Zoro",
    avatar: "https://i.pravatar.cc/150?img=32",
    postId: "2",
    createdAt: "2h",
    read: false,
  },
  {
    id: "2",
    type: "follow",
    user: "Naruto",
    avatar: "https://i.pravatar.cc/150?img=45",
    createdAt: "1d",
    read: true,
  },
];
