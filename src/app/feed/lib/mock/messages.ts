export type Conversation = {
  id: string;
  user: {
    id: string;
    name: string;
    avatar: string;
    handle: string;
  };
  lastMessage: string;
  unread?: boolean;
};

export type Message = {
  id: string;
  conversationId: string;
  senderId: string; // "me" | other user id
  content: string;
  createdAt: string;
  image?: string;
};

export const mockConversations: Conversation[] = [
  {
    id: "c1",
    user: {
      id: "zoro",
      name: "Roronoa Zoro",
      handle: "@zoro",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    lastMessage: "Train harder.",
    unread: true,
  },
  {
    id: "c2",
    user: {
      id: "naruto",
      name: "Naruto Uzumaki",
      handle: "@naruto",
      avatar: "https://i.pravatar.cc/150?img=45",
    },
    lastMessage: "Believe it!",
    unread: false,
  },
];

export const mockMessages: Message[] = [
  {
    id: "m1",
    conversationId: "c1",
    senderId: "zoro",
    content: "Train harder.",
    createdAt: "10:21",
  },
  {
    id: "m2",
    conversationId: "c1",
    senderId: "me",
    content: "On it.",
    createdAt: "10:22",
  },
  {
    id: "m1",
    conversationId: "c2",
    senderId: "zoro",
    content: "Believe it!",
    createdAt: "10:21",
    image: "https://i.pravatar.cc/150?img=45",
  },
  {
    id: "m2",
    conversationId: "c2",
    senderId: "me",
    content: "AYOOOOO!!!",
    createdAt: "10:22",
  },
];
