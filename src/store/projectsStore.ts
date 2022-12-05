import { makeAutoObservable, runInAction, set } from 'mobx';
import { RootStoreType, TParams, TProject, TProjectResponse } from '~types';
import { projectsFiltersMap } from '@constants/filtersMap';
import { getProjectsApi, getPublicProjectsApi } from '@api/projectsApi';
import { APIPayload, APIResponse } from '~types/common';

export default class ProjectsStore {
  protected rootStore: RootStoreType;

  projects: TProject[] = [];

  activeProject = null;

  total = 0;

  filterParams: TParams = {
    [projectsFiltersMap.count]: 10,
  };

  isFirstPage = true;

  isLastPage = false;

  totalPages = 0;

  currentPage = 0;

  constructor(rootStore: RootStoreType) {
    // @ts-ignore
    makeAutoObservable(this, { rootStore: false });
    this.rootStore = rootStore;
  }

  get isFilterApplied() {
    return !!this.filterParams.q;
  }

  loadProjects = async (platformParams = this.filterParams) => {
    platformParams = { ...platformParams, ...this.filterParams };
    try {
      let response: APIResponse<TProjectResponse> | null = null;
      if (this.rootStore.authStore.isAuth) {
        response = await getProjectsApi(platformParams);
      } else {
        response = await getPublicProjectsApi(platformParams);
      }

      if (response && response.payload) {
        const { payload } = response;
        runInAction(() => {
          this.projects = payload.content;
          this.setPagingData(payload);
        });
      }
    } catch (e) {
      // todo: implement notifications
      console.error(e.message);
    }
  };

  loadMoreProjects = async (platformParams = this.filterParams) => {
    const params = { ...platformParams, ...this.filterParams, page: this.currentPage + 1 };

    try {
      const response: APIResponse<TProjectResponse> = await getProjectsApi(params);

      if (response && response.payload) {
        const { payload } = response;
        runInAction(() => {
          this.projects = [...this.projects, ...payload.content];
          this.setPagingData(payload);
        });
      }
    } catch (e) {
      // todo: implement notifications
      console.error(e.message);
    }
  };

  setFiltersParams = (field: string, value: any) => {
    set(this.filterParams, field, value);
  };

  setPagingData = (payload: APIPayload) => {
    runInAction(() => {
      this.total = payload.totalElements;
      this.totalPages = payload.totalPages;
      this.isLastPage = payload.last;
      this.isFirstPage = payload.first;
      this.currentPage = payload.number;
    });
  };
}
