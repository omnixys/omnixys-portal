export type User = {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  bio?: string;
  following?: boolean;
};

export const mockUsers: User[] = [
  {
    id: "zoro",
    name: "Roronoa Zoro",
    handle: "@zoro",
    avatar: "https://i.pravatar.cc/150?img=32",
    bio: "Swordsman • One Piece",
    following: true,
  },
  {
    id: "naruto",
    name: "Naruto Uzumaki",
    handle: "@naruto",
    avatar: "https://i.pravatar.cc/150?img=45",
    bio: "Hokage • Believe it!",
    following: false,
  },
];
