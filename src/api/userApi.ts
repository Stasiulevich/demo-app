import { privateHttp } from '@api/baseApi';
import { TExpert } from '~types/expert';

export const getUserDataApi = () => {
  const url = 'nest/api/login/expert';
  return privateHttp<TExpert>(url);
};
