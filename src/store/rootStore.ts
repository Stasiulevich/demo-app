import AppStore from '@store/appStore';
import AuthStore from '@store/authStore';
import ProjectsStore from '@store/projectsStore';
import ActivitiesStore from '@store/activitiesStore';

export class RootStore {
  appStore!: AppStore;

  authStore!: AuthStore;

  projectsStore!: ProjectsStore;

  activitiesStore!: ActivitiesStore;

  constructor() {
    this.init();
  }

  init() {
    this.authStore = new AuthStore(this);
    this.appStore = new AppStore(this);
    this.projectsStore = new ProjectsStore(this);
    this.activitiesStore = new ActivitiesStore(this);
  }

  reset() {
    this.init();
  }
}

export const rootStore = new RootStore();
