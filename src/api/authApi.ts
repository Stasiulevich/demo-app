import { privateHttp, publicHttp } from '@api/baseApi';
import { TLoginSchema } from '@utils/validation';
import { TExpert } from '~types/expert';

export const loginApi = (data: TLoginSchema & { rememberMe?: boolean }) => {
  const url = 'nest/login';
  return publicHttp<TExpert>(url, { body: data, method: 'POST' }, { returnFullResponse: true });
};

export const logoutApi = () => {
  const url = 'nest/logout';
  return privateHttp(url);
};

export const checkTokenApi = () => {
  const url = 'nest/token';
  return privateHttp<{ token: string }>(url);
};
