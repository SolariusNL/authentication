export type Role = "ADMIN" | "USER";
export type User = {
  id: number;
  username: string;
  email: string;
  tickets: number;
  bits: number;
  premium: boolean;
  createdAt: Date;
  updatedAt: Date;
  role: Role;
  avatarUri: string; // Relative path, you must prepend the media host
  banned: boolean;
  locked: boolean;
  bio: string;
  lastSeen: Date;
  alias?: string; // Nickname
};
