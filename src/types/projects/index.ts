import { APIPagingPayload, TLabel } from '~types/common';

export type TProject = {
  id: number;
  title: string;
  subtitle: string;
  mediaKey: string;
  activePeriod: {
    startDateTime: string;
    endDateTime: string;
  };
  firstPublicationDateTime: string;
  location: number;
  viewsCount: number;
  subcategory: string; // todo: create eum GROUP and etc
  createTime: string;
  creator: {
    expertId: number;
    firstName: string;
    lastName: string;
    tagline: string;
    roles: string[];
    badge: string; // todo: think about enum
    isProStatus: boolean;
    profileImageUrl: string;
    avatarIcon: string | null;
    labels: TLabel[];
    tags: string[];
    about: string;
    location: string;
    proStatus: boolean;
  };
  status: string; // todo: create enum PUBLISHED and etc
  savedToFavourites: boolean;
  accessLevel: string; // todo: create enum GUEST
  connectedProjectId: string | null;
};

export type TProjectResponse = APIPagingPayload<TProject[]>;
