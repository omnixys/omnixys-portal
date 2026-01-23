const usernames = [
  "alphaDev",
  "pixelFox",
  "nightCoder",
  "reactWizard",
  "typescriptPro",
  "zenDev",
  "cloudNinja",
  "byteHunter",
  "frontendAce",
  "stackMaster",
];

const fullName = [
  "alphga omnixsy",
  "pixelFox omnixsy",
  "nightCoder omnixsy",
  "reactWizard omnixsy",
  "typescriptPro omnixsy",
  "zenDev omnixsy",
  "cloudNinja omnixsy",
  "byteHunter omnixsy",
  "frontendAce omnixsy",
  "stackMaster omnixsy",
];

function getRandomUsername() {
  return usernames[Math.floor(Math.random() * usernames.length)];
}

function getRandomFullName() {
  return fullName[Math.floor(Math.random() * fullName.length)];
}

function getRandomDate(daysBack = 30): Date {
  const now = Date.now();
  const past = now - daysBack * 24 * 60 * 60 * 1000;
  return new Date(past + Math.random() * (now - past));
}

function getRandomItem<T>(list: readonly T[]): T {
  return list[Math.floor(Math.random() * list.length)];
}

export type Post = {
  id: string;
  username: string;
  user: string;
  avatar: string;
  content: string;
  image?: string;

  likes: number;
  reposts: number;

  bookmarked?: boolean;

  liked?: boolean;
  reposted?: boolean;
  parentId?: string | null;

  authorId: string;
  community?: string | null;

  sensitive?: boolean;
  createdAt: Date;

  fullName: string;
};

export const mockPosts: Post[] = Array.from({ length: 50 }).map((_, i) => ({
  id: String(i),
  user: `User ${i + 1}`,
  avatar: `https://i.pravatar.cc/150?img=${i + 3}`,
  content: "This is a mock post for the social feed.",
  image: i % 2 === 0 ? "https://picsum.photos/600/400" : undefined,
  likes: Math.floor(Math.random() * 100),
  reposts: Math.floor(Math.random() * 20),
  liked: false,
  reposted: false,
  parentId: null,
  authorId: i % 5 === 0 ? "me" : `author${i % 10}`,
  community: i % 3 === 0 ? "Community A" : i % 3 === 1 ? "Community B" : null,
  bookmarked: false,
  sensitive: i % 10 === 0,
  username: getRandomUsername(),
  fullName: getRandomFullName(),
  createdAt: getRandomDate(60),
}));

const mockData2 = [
  {
    id: "1",
    user: "Lama Dev",
    username: getRandomItem(usernames),
    avatar: "https://i.pravatar.cc/150?img=12",
    content: "This is the original post",
    likes: 5,
    reposts: 1,
    parentId: null,
    authorId: "Steve",
    community: "React.js",
    bookmarked: false,
    sensitive: true,
    createdAt: new Date(),
    fullName: getRandomFullName(),
  },
  {
    id: "2",
    username: getRandomItem(usernames),
    user: "User A",
    avatar: "https://i.pravatar.cc/150?img=32",
    content: "First reply",
    likes: 2,
    reposts: 0,
    parentId: "1",
    authorId: "Steve",
    community: "React.js",
    bookmarked: false,
    sensitive: false,
    createdAt: getRandomDate(14),
    fullName: getRandomFullName(),
  },
  {
    id: "3",
    username: getRandomItem(usernames),
    user: "User B",
    avatar: "https://i.pravatar.cc/150?img=45",
    content: "Reply to reply",
    likes: 0,
    reposts: 0,
    parentId: "2",
    authorId: "Steve",
    community: "React.js",
    bookmarked: false,
    sensitive: false,
    fullName: getRandomFullName(),
  },
  {
    id: "4",
    username: getRandomItem(usernames),
    user: "Lama Dev",
    avatar: "https://i.pravatar.cc/150?img=12",
    content: "For you post (React)",
    likes: 5,
    reposts: 1,
    authorId: "me",
    community: "React.js",
    parentId: null,
    bookmarked: true,
    sensitive: false,
    fullName: getRandomFullName(),
  },
  {
    id: "5",
    user: "Zoro",
    username: getRandomItem(usernames),
    avatar: "https://i.pravatar.cc/150?img=32",
    content: "One Piece is peak.",
    likes: 20,
    reposts: 3,
    authorId: "zoro",
    community: "One Piece",
    parentId: null,
    bookmarked: true,
    sensitive: false,
    fullName: getRandomFullName(),
  },
  {
    id: "6",
    user: "Naruto",
    username: getRandomItem(usernames),
    avatar: "https://i.pravatar.cc/150?img=45",
    content: "Believe it!",
    likes: 15,
    reposts: 2,
    authorId: "naruto",
    community: "Naruto",
    parentId: null,
    bookmarked: true,
    sensitive: false,
    fullName: getRandomFullName(),
  },
];
