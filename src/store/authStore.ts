import { makeAutoObservable, runInAction } from 'mobx';
import { RootStoreType } from '~types';
import * as SecureStore from 'expo-secure-store';
import { TLoginSchema } from '@utils/validation';
import { Toast } from 'native-base';
import { checkTokenApi, loginApi, logoutApi } from '@api/authApi';
import { TExpert } from '~types/expert';
import { getUserDataApi } from '@api/userApi';

export default class AuthStore {
  protected rootStore: RootStoreType;

  user = {} as TExpert;

  isAuth = false;

  token: string | null = null;

  constructor(rootStore: RootStoreType) {
    // @ts-ignore
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  login = async (data: TLoginSchema) => {
    try {
      const result = await loginApi({
        ...data,
        rememberMe: false,
      });
      const token = result.headers.authorization!.replace('Bearer ', '');
      await SecureStore.setItemAsync('bubu-user-token', token);
      runInAction(() => {
        this.isAuth = true;
        this.token = token;
        this.user = result.data.payload;
      });
    } catch (error) {
      console.log('LOGIN ERROr', error);
      // todo: implement notificator
      let message =
        error?.response?.message ||
        error?.response?.data?.message ||
        error?.response?.error ||
        error?.response?.data?.error;
      if (error?.response?.status === 401 || message === 'Unauthorized') {
        message = 'Incorrect email or password';
      }
      Toast.show({
        description: message,
        placement: 'top',
      });
    }
  };

  logout = async () => {
    try {
      await logoutApi();
      await SecureStore.deleteItemAsync('bubu-user-token');
      runInAction(() => {
        this.isAuth = false;
        this.token = null;
        this.user = {} as TExpert;
      });
    } catch (e) {
      console.error(e.message);
    }
  };

  setToken = (value: string) => {
    this.token = value;
  };

  setAuth = (value: boolean) => {
    this.isAuth = value;
  };

  getUserData = async () => {
    try {
      const user = await getUserDataApi();
      // @ts-ignore
      this.user = user.payload;
    } catch (e) {
      console.error(e.message);
    }
  };

  checkAuth = async () => {
    try {
      const result = await checkTokenApi();
      if (result && result.payload.token) {
        this.setToken(result.payload.token);
        this.setAuth(true);
        this.getUserData();
      }
    } catch (e) {
      // todo: add error handler for all try/catch block
    }
  };
}
