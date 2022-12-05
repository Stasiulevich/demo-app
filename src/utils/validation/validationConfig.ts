import * as yup from 'yup';
import {
  POST_FIELDS,
  PROJECT_FIELDS,
  REGISTRATION_FIELDS,
  CHANGE_PASSWORD_FIELDS,
  SEND_MESSAGE_FIELDS,
  REPLY_FIELDS,
  SHAREHOLDER_FIELDS,
  ACTIVITY_FIELDS,
  GROUP_CHAT_FIELDS,
  YOUR_FEED_FIELDS,
  SEND_TEAM_REQUEST_FIELDS,
} from '@constants/common';
import { validationMap } from '@utils/validation/validationMap';
import { TLoginSchema } from '@utils/validation/types';

/* export const registrationSchema = [
  yup.object().shape({
    [REGISTRATION_FIELDS.NAME]: yup
      .string()
      .trim()
      .matches(/^([^0-9]*)$/, 'Name should not contain numbers')
      .required('Name is a required field'),
    [REGISTRATION_FIELDS.LAST_NAME]: yup
      .string()
      .trim()
      .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
      .required('Last name is a required field'),
    [REGISTRATION_FIELDS.EMAIL]: yup
      .string()
      .trim()
      .email('Email should correct format')
      .required('Email is a required field'),
    [REGISTRATION_FIELDS.PASSWORD]: yup
      .string()
      .trim()
      .required('Please Enter your password')
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number'
      ),
    [REGISTRATION_FIELDS.CONFIRM_PASSWORD]: yup
      .string()
      .trim()
      .required('Please confirm your password')
      .oneOf([yup.ref(REGISTRATION_FIELDS.PASSWORD), null], 'Passwords must match'),
  }),
  yup.object().shape({
    [REGISTRATION_FIELDS.INDUSTRY]: yup.string().trim().required('This field is a required').nullable(),
    [REGISTRATION_FIELDS.AREA]: yup.string().trim().required('This field is a required').nullable(),
    [REGISTRATION_FIELDS.ROLE]: yup
      .array()
      .nullable()
      .required('This field is a required')
      .min(1, 'This field is a required'),
  }),
  yup.object().shape({
    // avatar: yup.string().required('Image is a required'),
    [REGISTRATION_FIELDS.LOCATION]: yup.number().nullable(),
    [REGISTRATION_FIELDS.LANGUAGE]: yup.array(),
    [REGISTRATION_FIELDS.ABOUT_YOU]: yup
      .string()
      .trim()
      .max(256, 'The maximum length for this field is 256 characters'),
  }),
]; */

/* export const registrationSchemaSingle = yup.object().shape({
  // todo: insert here validation expert status schema
  [REGISTRATION_FIELDS.NAME]: yup
    .string()
    .trim()
    .matches(/^([^0-9]*)$/, 'Name should not contain numbers')
    .required('Name is a required field'),
  [REGISTRATION_FIELDS.LAST_NAME]: yup
    .string()
    .trim()
    .matches(/^([^0-9]*)$/, 'Last name should not contain numbers')
    .required('Last name is a required field'),
  [REGISTRATION_FIELDS.EMAIL]: yup
    .string()
    .trim()
    .email('Email should correct format')
    .required('Email is a required field'),
  [REGISTRATION_FIELDS.PASSWORD]: yup
    .string()
    .trim()
    .required('Please Enter your password')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number'
    ),
  [REGISTRATION_FIELDS.CONFIRM_PASSWORD]: yup
    .string()
    .trim()
    .required('Please confirm your password')
    .oneOf([yup.ref(REGISTRATION_FIELDS.PASSWORD), null], 'Passwords must match'),
  [REGISTRATION_FIELDS.INDUSTRY]: yup.string().trim().required('This field is a required').nullable(),
  [REGISTRATION_FIELDS.AREA]: yup.string().trim().required('This field is a required').nullable(),
  [REGISTRATION_FIELDS.ROLE]: yup
    .array()
    .nullable()
    .required('This field is a required')
    .min(1, 'This field is a required'),
}); */

export const loginSchema: yup.SchemaOf<TLoginSchema> = yup.object().shape({
  [REGISTRATION_FIELDS.EMAIL]: yup
    .string()
    .trim()
    .email('Email should correct format')
    .required('Email is a required field'),
  [REGISTRATION_FIELDS.PASSWORD]: yup.string().trim().required('Please Enter your password'),
});

/* export const postSchema = yup.object().shape({
  [POST_FIELDS.TITLE]: yup
    .string()
    .trim()
    .required('Title is a required field')
    .max(256, 'The maximum length for this field is 256 characters'),
  [POST_FIELDS.BODY]: yup
    .string()
    .trim()
    .required('Body is a required field')
    .min(8, 'Body is a required field')
    .max(8000, 'The maximum length for this field is 8000 characters'),
  [POST_FIELDS.TAGS]: yup
    .array()
    .required('Tags is a required field')
    .min(1, 'Tags is a required field')
    .max(5, '5 Tags are a maximum'),
}); */

/* export const forumPostSchema = yup.object().shape({
  [POST_FIELDS.BODY]: yup
    .string()
    .trim()
    .required('Body is a required field')
    .min(8, 'Body is a required field')
    .max(8000, 'The maximum length for this field is 8000 characters'),
}); */

/* export const activitySchema = yup.object().shape({
  [ACTIVITY_FIELDS.STATUS]: yup.string(),
  [ACTIVITY_FIELDS.TITLE]: yup
    .string()
    .trim()
    .required('Title is a required field')
    .max(256, 'The maximum length for this field is 256 characters'),
  [ACTIVITY_FIELDS.SUBTITLE]: yup
    .string()
    .trim()
    .when(ACTIVITY_FIELDS.STATUS, {
      is: (status) => status === 'PENDING_APPROVAL',
      then: yup
        .string()
        .trim()
        .required('SubTitle is a required field')
        .max(256, 'The maximum length for this field is 256 characters'),
    }),
  [ACTIVITY_FIELDS.DESCRIPTION]: yup
    .string()
    .max(7000, 'The maximum length for this field is 5000 characters')
    .when(ACTIVITY_FIELDS.STATUS, {
      is: (status) => status === 'PENDING_APPROVAL',
      then: yup
        .string()
        .required('Description is a required field')
        .max(7000, 'The maximum length for this field is 5000 characters'),
    }),
  [ACTIVITY_FIELDS.MEDIA_KEY]: yup.object().when(ACTIVITY_FIELDS.STATUS, {
    is: (status) => status === 'PENDING_APPROVAL',
    then: yup.object().required('Activity Image is required'),
  }),
  [ACTIVITY_FIELDS.LOCATION]: yup
    .number()
    .nullable()
    .when(ACTIVITY_FIELDS.STATUS, {
      is: (status) => status === 'PENDING_APPROVAL',
      then: yup
        .number()
        .required('Location is a required field')
        .max(256, 'The maximum length for this field is 256 characters'),
    }),
  [ACTIVITY_FIELDS.ONLINE_URL]: yup
    .string()
    .trim()
    .nullable()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct link!'
    )
    .max(256, 'The maximum length for this field is 256 characters'),
  [ACTIVITY_FIELDS.TAGS]: yup.array().when(ACTIVITY_FIELDS.STATUS, {
    is: (status) => status === 'PENDING_APPROVAL',
    then: yup
      .array()
      .required('Tags is a required field')
      .min(1, 'Tags is a required field')
      .max(5, '5 Tags are a maximum'),
  }),
  [ACTIVITY_FIELDS.ACTIVITY_TYPE]: yup
    .string()
    .trim()
    .required('Title is a required field')
    .max(256, 'The maximum length for this field is 256 characters'),
  [ACTIVITY_FIELDS.EVENT_PERIODS]: yup.array().when(ACTIVITY_FIELDS.STATUS, {
    is: (status) => status === 'PENDING_APPROVAL',
    then: yup
      .array()
      .of(
        yup.object().shape({
          [ACTIVITY_FIELDS.START_DATE_TIME]: yup.date().nullable(false).required('Start date is a required field'),
          [ACTIVITY_FIELDS.END_DATE_TIME]: yup
            .date()
            .nullable(false)
            .required('End date is a required field')
            .min(yup.ref(PROJECT_FIELDS.START_DATE_TIME), 'End date must be grater than start date'),
        })
      )
      .min(1, 'Event period required'),
  }),
  /!*
  [ACTIVITY_FIELDS.EVENT_PERIODS]: yup
    .string()
    .trim()
    .required('Title is a required field')
    .max(256, 'The maximum length for this field is 256 characters'),
  [ACTIVITY_FIELDS.TICKETS]: yup
    .string()
    .trim()
    .required('Title is a required field')
    .max(256, 'The maximum length for this field is 256 characters'),
*!/
}); */

/* export const projectSchema = yup.object().shape({
  [PROJECT_FIELDS.STATUS]: yup.string(),
  [PROJECT_FIELDS.TITLE]: yup
    .string()
    .trim()
    .required('Title is a required field')
    .max(256, 'The maximum length for this field is 256 characters'),
  [PROJECT_FIELDS.SUBTITLE]: yup
    .string()
    .trim()
    .max(256, 'The maximum length for this field is 256 characters')
    .when(PROJECT_FIELDS.STATUS, {
      is: (status) => status === 'PENDING_APPROVAL',
      then: yup
        .string()
        .trim()
        .required('SubTitle is a required field')
        .max(256, 'The maximum length for this field is 256 characters'),
    }),
  [PROJECT_FIELDS.DESCRIPTION]: yup
    .string()
    .max(7000, 'The maximum length for this field is 5000 characters')
    .when(PROJECT_FIELDS.STATUS, {
      is: (status) => status === 'PENDING_APPROVAL',
      then: yup
        .string()
        .required('Description is a required field')
        .max(7000, 'The maximum length for this field is 5000 characters'),
    }),
  [PROJECT_FIELDS.MEDIA_KEY]: yup.object().when(PROJECT_FIELDS.STATUS, {
    is: (status) => status === 'PENDING_APPROVAL',
    then: yup.object().required('Project Image is required'),
  }),
  [PROJECT_FIELDS.LOCATION]: yup
    .string()
    .nullable()
    .when(PROJECT_FIELDS.STATUS, {
      is: (status) => status === 'PENDING_APPROVAL',
      then: yup
        .string()
        .nullable()
        .required('Location is a required field')
        .max(256, 'The maximum length for this field is 256 characters'),
    }),
  [PROJECT_FIELDS.TAGS]: yup.array().when(PROJECT_FIELDS.STATUS, {
    is: (status) => status === 'PENDING_APPROVAL',
    then: yup
      .array()
      .required('Tags is a required field')
      .min(1, 'Tags is a required field')
      .max(5, '5 Tags are a maximum'),
  }),
  [PROJECT_FIELDS.GOALS]: yup.array(),
  [PROJECT_FIELDS.TEAM_DESCRIPTION]: yup
    .string()
    .trim()
    .nullable()
    .max(256, 'The maximum length for this field is 256 characters'),
  /!* Budget *!/
  [PROJECT_FIELDS.BUDGET]: yup.object({}).when(PROJECT_FIELDS.GOALS, {
    is: (sck) => sck && sck.includes("Funding"),
    then: yup.object({
      [PROJECT_FIELDS.AMOUNT]: yup
        .number()
        .transform((cv, ov) => ov === '' ? undefined : cv).typeError("Amount should be a number").test(
        .test('oneOfRequired', 'Currency required', function (value) {
          return this.parent[PROJECT_FIELDS.CURRENCY] || !value;
        })
        .test(
          'maxDigitsAfterDecimal',
          'Amount must have 2 digits after decimal or less',
          (number) => Number.isInteger(number * 10 ** 2) || !number
        ),
      [PROJECT_FIELDS.CURRENCY]: yup.string().nullable(),
    }),
  }),
  /!* Ticket *!/
  [PROJECT_FIELDS.TICKET_INFO]: yup
    .object({
      [PROJECT_FIELDS.TICKET_PRICE]: yup
        .number()
        .transform((cv, ov) => ov === '' ? undefined : cv).typeError("Price should be a number").test(
        .test('oneOfRequired', 'Currency required', function (value) {
          return this.parent[PROJECT_FIELDS.TICKET_SYMBOL] || !value;
        })
        .test(
          'maxDigitsAfterDecimal',
          'Amount must have 2 digits after decimal or less',
          (number) => Number.isInteger(number * 10 ** 2) || !number
        ),
      [PROJECT_FIELDS.TICKET_SYMBOL]: yup.string().nullable(),
      [PROJECT_FIELDS.TICKET_FREE]: yup.boolean(),
      [PROJECT_FIELDS.TICKET_TOTAL]: yup
        .number()
        .transform((cv, ov) => ov === '' ? undefined : cv).typeError("Quantity should be a number").test(
        .test('oneOfRequired', 'Currency required', function (value) {
          return this.parent[PROJECT_FIELDS.TICKET_SYMBOL] || !value;
        }),
    })
    .when([PROJECT_FIELDS.SUB_CATEGORY, PROJECT_FIELDS.STATUS], {
      is: (category, status) => category && category === "MENTORSHIP" && status === "PENDING_APPROVAL",
      then: yup.object({
        [PROJECT_FIELDS.TICKET_PRICE]: yup.number().when(PROJECT_FIELDS.TICKET_FREE, {
          is: false,
          then: yup
            .number()
            .transform((cv, ov) => ov === '' ? undefined : cv).typeError("Amount should be a number").test(
            .test('oneOfRequired', 'Currency required', function (value) {
              return this.parent[PROJECT_FIELDS.TICKET_SYMBOL] || !value;
            })
            .test(
              'maxDigitsAfterDecimal',
              'Price must have 2 digits after decimal or less',
              (number) => Number.isInteger(number * 10 ** 2) || !number
            ),
        }),
        [PROJECT_FIELDS.TICKET_SYMBOL]: yup.string().nullable(),
        [PROJECT_FIELDS.TICKET_FREE]: yup.boolean(),
        [PROJECT_FIELDS.TICKET_TOTAL]: yup.number().when(PROJECT_FIELDS.TICKET_FREE, {
          is: false,
          then: yup
            .number()
            .transform((cv, ov) => ov === '' ? undefined : cv).typeError("Quantity should be a number").test(
            .test('oneOfRequired', 'Currency required', function (value) {
              return this.parent[PROJECT_FIELDS.TICKET_SYMBOL] || !value;
            })
            .required('Amount required'),
        }),
      }),
    }),
  /!* activePeriod *!/
  [PROJECT_FIELDS.ACTIVE_PERIOD]: yup.object().shape({
    [PROJECT_FIELDS.START_DATE_TIME]: yup.date().nullable(),
    [PROJECT_FIELDS.END_DATE_TIME]: yup.date().nullable(),
  }),
  [PROJECT_FIELDS.FAQ]: yup.array().of(
    yup.object({
      [PROJECT_FIELDS.QUESTION]: yup
        .string()
        .trim()
        .required('Title is a required field')
        .max(256, 'The maximum length for this field is 256 characters'),
      [PROJECT_FIELDS.ANSWER]: yup
        .string()
        .trim()
        .required('Title is a required field')
        .max(2000, 'The maximum length for this field is 2000 characters'),
    })
  ),
  [PROJECT_FIELDS.SUB_CATEGORY]: yup
    .string()
    .trim()
    .required('Title is a required field')
    .max(256, 'The maximum length for this field is 256 characters'),
}); */

/* export const yourFeedSchema = yup.object().shape({
  [YOUR_FEED_FIELDS.CATEGORY]: yup.string().trim().required('Title is a required field'),
  [YOUR_FEED_FIELDS.SUB_CATEGORY]: yup.string().trim().required('Title is a required field'),
  [YOUR_FEED_FIELDS.TITLE]: yup
    .string()
    .trim()
    .required('Title is a required field')
    .max(256, 'The maximum length for this field is 256 characters'),
}); */

/* export const groupChatSchema = yup.object().shape({
  [GROUP_CHAT_FIELDS.NAME]: yup
    .string()
    .trim()
    .required('Title is a required field')
    .max(256, 'The maximum length for this field is 256 characters'),
  [GROUP_CHAT_FIELDS.MEMBER_IDS]: yup
    .array()
    .required('Group chat members is a required field')
    .max(200, 'Group chat members limit 200'),
}); */

/* export const sendMessageSchema = yup.object().shape({
  //  [SEND_MESSAGE_FIELDS.TEXT]: yup.string().trim().required('Nothing to send'),
}); */

/* export const sendTeamRequestSchema = yup.object().shape({
  [SEND_TEAM_REQUEST_FIELDS.REQUEST_TEXT]: yup
    .string()
    .trim()
    .required('Nothing to send')
    .max(400, 'The maximum length for this field is 400 characters'),
}); */

/* export const replySchema = yup.object().shape({
  [REPLY_FIELDS.REPLY]: yup.string().trim().required('Nothing to send'),
}); */

/* export const forgotPasswordSchema = yup.object().shape({
  [REGISTRATION_FIELDS.EMAIL]: yup
    .string()
    .trim()
    .email('Email should correct format')
    .required('Email is a required field'),
}); */

/* export const CheckCodeSchema = yup.object().shape({
  [REGISTRATION_FIELDS.VERIF_CODE]: yup.string().trim().required('This is a required field'),
}); */

/* export const resetPasswordSchema = yup.object().shape({
  [REGISTRATION_FIELDS.PASSWORD]: yup
    .string()
    .trim()
    .required('Please Enter your new password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number'
    ),
  [REGISTRATION_FIELDS.CONFIRM_PASSWORD]: yup
    .string()
    .trim()
    .required('Please confirm your new password')
    .oneOf([yup.ref(REGISTRATION_FIELDS.PASSWORD), null], 'Passwords must match'),
}); */

/* export const settingsFullNameSchema = yup.object().shape({
  [REGISTRATION_FIELDS.NAME]: validationMap.registration[REGISTRATION_FIELDS.NAME],
  [REGISTRATION_FIELDS.LAST_NAME]: validationMap.registration[REGISTRATION_FIELDS.LAST_NAME],
}); */

/* export const changePasswordSchema = yup.object().shape({
  [CHANGE_PASSWORD_FIELDS.CURRENT_PASSWORD]: yup.string().trim().required('Please Enter your current password'),
  [CHANGE_PASSWORD_FIELDS.NEW_PASSWORD]: yup
    .string()
    .trim()
    .notOneOf(
      [yup.ref(CHANGE_PASSWORD_FIELDS.CURRENT_PASSWORD), null],
      'The new password must be different from the current one'
    )
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{8,}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number'
    )
    .required('Please Enter your new password'),
  [CHANGE_PASSWORD_FIELDS.CONFIRM_PASSWORD]: yup
    .string()
    .trim()
    .oneOf([yup.ref(CHANGE_PASSWORD_FIELDS.NEW_PASSWORD), null], 'Passwords must match')
    .required('Please confirm your new password'),
}); */

/* export const shareHolderSchema = yup.object().shape({
  [SHAREHOLDER_FIELDS.SALUTATION]: validationMap.shareHolder[SHAREHOLDER_FIELDS.SALUTATION],
  [REGISTRATION_FIELDS.NAME]: validationMap.registration[REGISTRATION_FIELDS.NAME],
  [REGISTRATION_FIELDS.LAST_NAME]: validationMap.registration[REGISTRATION_FIELDS.LAST_NAME],
  [SHAREHOLDER_FIELDS.COMPANY]: validationMap.shareHolder[SHAREHOLDER_FIELDS.COMPANY],
  [REGISTRATION_FIELDS.EMAIL]: validationMap.registration[REGISTRATION_FIELDS.EMAIL],
  [SHAREHOLDER_FIELDS.PHONE_NUMBER]: validationMap.shareHolder[SHAREHOLDER_FIELDS.PHONE_NUMBER],
  [SHAREHOLDER_FIELDS.COMMENTS]: validationMap.shareHolder[SHAREHOLDER_FIELDS.COMMENTS],
}); */

/* export const submitProjectSchema = yup.object().shape({
  [REGISTRATION_FIELDS.FULL_NAME]: validationMap.registration[REGISTRATION_FIELDS.NAME],
  [REGISTRATION_FIELDS.EMAIL]: validationMap.registration[REGISTRATION_FIELDS.EMAIL],
  [SHAREHOLDER_FIELDS.COMMENTS]: yup
    .string()
    .trim()
    .required('About your project is a required field')
    .max(250, 'The maximum length for this field is 250 characters'),
}); */
