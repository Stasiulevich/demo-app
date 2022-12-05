import { TLabel } from '~types/common';

export type TExpert = {
  about: string | null;
  anonymous: boolean;
  avatarIcon: string | null;
  badge: string;
  deleted: boolean;
  expertId: number;
  firstName: string;
  labels: TLabel[];
  lastName: string;
  location: null;
  permissions: string[];
  proStatus: boolean;
  profileImageUrl: string;
  roles: string[];
  tagline: string | null;
  tags: string[];
};
