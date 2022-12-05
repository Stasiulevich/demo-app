import merge from 'deepmerge';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosStatic } from 'axios';
import qs from 'qs';
import apiAxios from '@api/axiosConfig';
import { CustomResponseType, RequestSettings } from '~types/common';

const defaultRequestOptions: AxiosRequestConfig = {
  method: 'GET',
  paramsSerializer: {
    serialize: (p) => qs.stringify(p, { arrayFormat: 'comma', encode: true }),
  },
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json;charset=UTF-8',
  },
};

class BaseApi {
  httpClient: AxiosInstance | AxiosStatic;

  constructor(httpClient: AxiosInstance | AxiosStatic) {
    this.httpClient = httpClient;
  }

  // todo: improve type for different response
  request = async <T>(
    url: string,
    customOptions: AxiosRequestConfig & { body?: any } = {},
    settings: RequestSettings = {}
    // ): Promise<APIResponse<T> | AxiosResponse> => {
  ): Promise<CustomResponseType<T>> => {
    const requestPath = url;
    const options: AxiosRequestConfig & { body?: any } = merge(defaultRequestOptions, customOptions);
    const requestOptions = options;
    if (options.body) {
      if (options.method === 'GET') {
        delete requestOptions.body;
      } else if (customOptions.body instanceof FormData || customOptions.body instanceof File) {
        requestOptions.body = customOptions.body;
      } else {
        requestOptions.body = options.body;
      }
    }

    const responseData = await this.httpClient(requestPath, {
      ...requestOptions,
      data: requestOptions.body,
      cancelToken: settings.cancelToken?.token,
    })
      .then(async (response) => {
        if (!response) return {};
        if (settings.returnFullResponse) {
          return response;
        }
        return response.data;
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          // info: для отмены предыдущего запроса при поиске
          const err = new Error('MANUAL_CANCEL');
          return Promise.reject(err);
        }
        const { status } = error.response;
        const failedValue =
          error.response.data instanceof Array
            ? {
                ...error.response.data[0],
                status,
              }
            : {
                ...error.response.data,
                status,
              };
        return Promise.reject(failedValue);
      });

    return responseData as CustomResponseType<T>;
    // if (settings.returnFullResponse) {
    //   return responseData as AxiosResponse<T>;
    // }
    // return responseData as APIResponse<T>;
  };
}

export const privateHttp = new BaseApi(apiAxios).request;
export const publicHttp = new BaseApi(axios).request;
