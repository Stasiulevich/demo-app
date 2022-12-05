import { privateHttp } from '@api/baseApi';
import { TParams, TProjectResponse } from '~types';

export const getActivityApi = (params: TParams) => {
  const url = 'nest/api/activities';
  return privateHttp<TProjectResponse>(url, { params });
};

export const getPublicActivityApi = (params: TParams) => {
  const url = 'nest/api/public/activities';
  return privateHttp<TProjectResponse>(url, { params });
};
