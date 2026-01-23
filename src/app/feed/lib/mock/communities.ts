export const followedCommunities = ["One Piece", "Naruto", "React.js", "Community A", "Community B"];

export type Community = {
  id: string;
  name: string;
  description?: string;
  followed?: boolean;
};

export const communities: Community[] = [
  {
    id: "One-Piece",
    name: "One Piece",
    description: "Pirates, adventures and freedom.",
    followed: true,
  },
  {
    id: "Naruto",
    name: "Naruto",
    description: "Ninjas, chakra and destiny.",
    followed: true,
  },
];
