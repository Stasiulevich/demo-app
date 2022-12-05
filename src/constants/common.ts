export const MAX_FILE_SIZE = 5000000; // 5mb

export enum REGISTRATION_FIELDS {
  NAME = 'firstName',
  LAST_NAME = 'lastName',
  FULL_NAME = 'fullName',
  EMAIL = 'email',
  PASSWORD = 'password',
  CONFIRM_PASSWORD = 'confirmPassword',
  INDUSTRY = 'industryId',
  AREA = 'expertiseAreaId',
  ROLE = 'expertRoleIds',
  SPECIALITY = 'specialityIds',
  DIGITAL_HEALTH_SKILLS = 'digitalHealthSkillIds',
  AVATAR = 'profileImage',
  LOCATION = 'locationId',
  LANGUAGE = 'languageIds',
  ABOUT_YOU = 'about',
  VERIF_CODE = 'resetPasswordCode',
  EXPERT_TITLE = 'title',
}

export const POST_FIELDS = {
  TITLE: 'title',
  BODY: 'body',
  TAGS: 'tags',
};
export const FORUM_POST_FIELDS = {
  TITLE: 'title',
  BODY: 'body',
  TAGS: 'tags',
  TYPE: 'type',
  PARENT_ID: 'parentId',
};
export const ACTIVITY_FIELDS = {
  STATUS: 'status',
  TITLE: 'title',
  SUBTITLE: 'subtitle',
  DESCRIPTION: 'description',
  MEDIA_KEY: 'mediaKey',
  LOCATION: 'location',
  TAGS: 'tags',
  TICKETS: 'tickets',
  ACTIVITY_TYPE: 'activityType',
  ONLINE_URL: 'onlineUrl',
  /* eventsPeriods */
  EVENT_PERIODS: 'eventPeriods',
  EVENT_DATE: 'eventDate',
  START_DATE_TIME: 'startDateTime',
  END_DATE_TIME: 'endDateTime',
};
export const PROJECT_FIELDS = {
  STATUS: 'status',
  TITLE: 'title',
  SUBTITLE: 'subtitle',
  DESCRIPTION: 'description',
  MEDIA_KEY: 'mediaKey',
  TAGS: 'tags',
  LOCATION: 'location',
  SUB_CATEGORY: 'subcategory',
  GOALS: 'goals',
  TEAM_DESCRIPTION: 'teamDescription',
  TAB_SETTINGS: 'tabSettings',
  CO_OWNERS: 'coOwners',
  /* FAQ */
  FAQ: 'faq',
  QUESTION: 'question',
  ANSWER: 'answer',
  FAQ_VIEW: 'faqView',
  /* budget */
  BUDGET: 'budget',
  AMOUNT: 'amount',
  CURRENCY: 'currencySymbol',
  /* active period */
  ACTIVE_PERIOD: 'activePeriod',
  START_DATE_TIME: 'startDateTime',
  END_DATE_TIME: 'endDateTime',
  /* tickets */
  TICKET_INFO: 'ticketInfo',
  TICKET_TOTAL: 'ticketsTotal',
  TICKET_PRICE: 'price',
  TICKET_SYMBOL: 'currencySymbol',
  TICKET_FREE: 'free',
};

export const YOUR_FEED_FIELDS = {
  TITLE: 'title',
  CATEGORY: 'category',
  SUB_CATEGORY: 'subCategory',
};

export const GROUP_CHAT_FIELDS = {
  NAME: 'name',
  AVATAR_KEY: 'avatarKey',
  MEMBER_IDS: 'memberIds',
};
export const SEND_MESSAGE_FIELDS = {
  TEXT: 'text',
};
export const SEND_TEAM_REQUEST_FIELDS = {
  REQUEST_TEXT: 'requestText',
};
export const REPLY_FIELDS = {
  REPLY: 'reply',
};

export const CHANGE_PASSWORD_FIELDS = {
  CURRENT_PASSWORD: 'currentPassword',
  NEW_PASSWORD: 'newPassword',
  CONFIRM_PASSWORD: 'confirmPassword',
};

export const EXTRA_TIME_SEC = 7200; // gap time for update refresh token
export const REFRESH_TOKEN_LIFE_TIME_SEC = 604800; // refresh token expires time, sync with backend
export const REFRESH_INTERVAL_SEC = 3600; // interval tick time

export const LOCALSTORAGE_KEYS = {
  ACTIVE_USER_ID: 'active-expert-id',
  STAY_LOGGED: 'stay-logged',
  EXPIRES: 'expires',
};

export const ADD_INFO_TEXT = '+ Add info';

export const BOOLEAN_MAP = [
  {
    id: 1,
    value: true,
    name: 'Yes',
  },
  {
    id: 2,
    value: false,
    name: 'No',
  },
];

export const levelMap = {
  'Diamond level': 'diamond',
  'Diamond Level': 'diamond',
  'Gold level': 'gold',
  'Silver level': 'silver',
};

export const MISSING_FIELD_REQUEST_URL = 'https://www.survio.com/survey/d/U7O0E4U6O3V0E8N3M';

export const SHAREHOLDER_FIELDS = {
  COMPANY: 'company',
  PHONE_NUMBER: 'phoneNumber',
  COMMENTS: 'comment',
  SALUTATION: 'salutation',
};

export const MAX_SELECTED_ITEMS = 10;

export const BOOLEAN_FIELDS_MAP = {
  mentoringSupport: 'Mentoring support',
  startupExperience: 'Startup experience',
  searchByMembership: `Expert's type`,
};

export const SUPPORTED_FILE_FORMATS = [
  'txt',
  'pdf',
  'doc',
  'docx',
  'docm',
  'rtf',
  'csv',
  'xls',
  'xlsx',
  'xlsm',
  'pps',
  'ppsm',
  'ppsx',
  'ppt',
  'pptm',
  'pptx',
  'jpeg',
  'jpg',
  'png',
  'gif',
  'tiff',
  'tif',
  'psd',
  'ai',
  'indd',
  'svg',
  'bmp',
  'ico',
];
