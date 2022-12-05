import axios from 'axios';
import { rootStore } from '@store';

// info: only for dev
const baseUrl = 'https://stg.bionabu.com/';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = baseUrl;

const apiAxios = axios.create({
  withCredentials: true,
  baseURL: baseUrl,
});

export const { CancelToken } = axios;

apiAxios.interceptors.request.use((config) => {
  if (rootStore.authStore.token) {
    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    config.headers.authorization = `Bearer ${rootStore.authStore.token}`;
  }
  return config;
});

// todo: implement interceptors for 403 error and update token
// apiAxios.interceptors.response.use(
//   (config) => config,
//   async (error) => {
//     if (error?.response?.status === 504) {
//       rootStore.appStore.apiError = true;
//     }
//     const originalRequest = error.config;
//     const isNeedStatus = error?.response?.status === 403;
//     if (
//       isNeedStatus &&
//       error.config &&
//       !error.config.isRetry &&
//       error.config.url !== 'nest/token'
//     ) {
//       originalRequest.isRetry = true;
//
//       try {
//         await rootStore.authStore.updateAccessToken();
//         return apiAxios.request(originalRequest);
//       } catch (e) {
//         console.error(e.message);
//         throw error;
//       }
//     }
//     throw error;
//   }
// );

export default apiAxios;
