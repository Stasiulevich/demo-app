import { POST_FIELDS, REGISTRATION_FIELDS, SHAREHOLDER_FIELDS } from '@constants/common';
import * as yup from 'yup';
import 'yup-phone';

export const validationMap = {
  registration: {
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
        // only upper and lower letters and number, minimum 8 and can't to be special characters
        // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        // only upper, lower letters, number and don't required special characters $@$!%*#?&
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{8,}$/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number'
      ),
    [REGISTRATION_FIELDS.CONFIRM_PASSWORD]: yup
      .string()
      .trim()
      .required('Please confirm your password')
      .oneOf([yup.ref(REGISTRATION_FIELDS.PASSWORD), null], 'Passwords must match'),
    [REGISTRATION_FIELDS.INDUSTRY]: yup.string().trim().required('This field is a required'),
    // [REGISTRATION_FIELDS.INDUSTRY]: yup
    //   .object({
    //     id: yup.number(),
    //     name: yup.string().trim(),
    //   })
    //   .required('This field is a required'),
    [REGISTRATION_FIELDS.AREA]: yup.string().trim().required('This field is a required'),
    [REGISTRATION_FIELDS.ROLE]: yup.array().required('This field is a required'),
    [REGISTRATION_FIELDS.LOCATION]: yup.string().trim(),
    [REGISTRATION_FIELDS.LANGUAGE]: yup.array(),
    [REGISTRATION_FIELDS.ABOUT_YOU]: yup
      .string()
      .trim()
      .max(256, 'The maximum length for this field is 256 characters'),
  },
  login: {
    [REGISTRATION_FIELDS.EMAIL]: yup
      .string()
      .trim()
      .email('Email should correct format')
      .required('Email is a required field'),
    [REGISTRATION_FIELDS.PASSWORD]: yup.string().trim().required('Please Enter your password'),
  },
  askQuestion: {
    [POST_FIELDS.TITLE]: yup
      .string()
      .trim()
      .required('Title is a required field')
      .max(256, 'The maximum length for this field is 256 characters'),
    [POST_FIELDS.BODY]: yup
      .string()
      .trim()
      .required('Body is a required field')
      .max(8000, 'The maximum length for this field is 8000 characters'),
    [POST_FIELDS.TAGS]: yup.array().max(5, '5 Tags are a maximum'),
  },
  shareHolder: {
    [SHAREHOLDER_FIELDS.SALUTATION]: yup.string().trim().required('Salutation is a required field'),
    [SHAREHOLDER_FIELDS.PHONE_NUMBER]: yup
      .string()
      .trim()
      .matches(/^[0-9-\s()+]*$/, 'Phone number is not valid')
      .nullable()
      .max(250, 'The maximum length for this field is 250 characters'),
    [SHAREHOLDER_FIELDS.COMPANY]: yup.string().trim(),
    [SHAREHOLDER_FIELDS.COMMENTS]: yup
      .string()
      .trim()
      .required('Comments is a required field')
      .max(250, 'The maximum length for this field is 250 characters'),
  },
};
