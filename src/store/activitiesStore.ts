import { makeAutoObservable, runInAction } from 'mobx';
import { RootStoreType, TParams, TProject, TProjectResponse } from '~types';
import { projectsFiltersMap } from '@constants/filtersMap';
import { getProjectsApi, getPublicProjectsApi } from '@api/projectsApi';
import { APIResponse } from '~types/common';
import { getActivityApi, getPublicActivityApi } from '@api/activityApi';

export default class ActivitiesStore {
  protected rootStore: RootStoreType;

  activities: TProject[] = [];

  activeProject = null;

  total = 0;

  filterParams: TParams = {
    [projectsFiltersMap.count]: 10,
  };

  isFirstPage = true;

  isLastPage = false;

  totalPages = 0;

  constructor(rootStore: RootStoreType) {
    // @ts-ignore
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  loadActivities = async (platformParams = this.filterParams) => {
    platformParams = { ...platformParams, ...this.filterParams };
    try {
      let response: APIResponse<TProjectResponse> | null = null;
      if (this.rootStore.authStore.isAuth) {
        response = await getActivityApi(platformParams);
      } else {
        response = await getPublicActivityApi(platformParams);
      }

      if (response && response.payload) {
        const { payload } = response;
        runInAction(() => {
          this.activities = payload.content;
          this.total = payload.totalElements;
          this.totalPages = payload.totalPages;
          this.isLastPage = payload.last;
          this.isFirstPage = payload.first;
          this.filterParams.page = payload.number;
        });
      }
    } catch (e) {
      // todo: implement notifications
      console.error(e.message);
    }
  };
}
