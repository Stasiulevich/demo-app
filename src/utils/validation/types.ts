import { REGISTRATION_FIELDS } from '@constants/common';

export type TLoginSchema = {
  [REGISTRATION_FIELDS.EMAIL]: string;
  [REGISTRATION_FIELDS.PASSWORD]: string;
};
