import { privateHttp } from '@api/baseApi';
import { TParams, TProjectResponse } from '~types';

export const getProjectsApi = (params: TParams) => {
  const url = 'nest/api/projects';
  return privateHttp<TProjectResponse>(url, { params });
};

export const getPublicProjectsApi = (params: TParams) => {
  const url = 'nest/api/public/projects';
  return privateHttp<TProjectResponse>(url, { params });
};
