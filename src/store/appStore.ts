import { makeAutoObservable } from 'mobx';
import { RootStoreType } from '~types';

export default class AppStore {
  protected rootStore: RootStoreType;

  constructor(rootStore: RootStoreType) {
    // @ts-ignore
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }
}
