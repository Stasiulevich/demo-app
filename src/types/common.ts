import { TExpert } from '~types/expert';
import { AxiosResponse, CancelTokenSource } from 'axios';

export type TLabel = {
  name: string;
  description: string;
  textColor: string;
  backgroundColor: string;
};

export type APIPagingPayload<T extends any> = {
  content: T;
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
};

export type APIPayload = Omit<APIPagingPayload<any>, 'content'>;

export type APIResponse<T extends any> = {
  message: string | null;
  payload: T;
  status: string;
};

//todo: improve code, this not work for login and check token request
export type CustomResponseType<T> = T extends TExpert ? AxiosResponse<APIResponse<T>> : APIResponse<T>;

export type RequestSettings = {
  cancelToken?: CancelTokenSource;
  returnFullResponse?: boolean;
};
