import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'region',
    data: { pageTitle: 'demoJHisperApp.region.home.title' },
    loadChildren: () => import('./region/region.routes'),
  },
  {
    path: 'country',
    data: { pageTitle: 'demoJHisperApp.country.home.title' },
    loadChildren: () => import('./country/country.routes'),
  },
  {
    path: 'location',
    data: { pageTitle: 'demoJHisperApp.location.home.title' },
    loadChildren: () => import('./location/location.routes'),
  },
  {
    path: 'department',
    data: { pageTitle: 'demoJHisperApp.department.home.title' },
    loadChildren: () => import('./department/department.routes'),
  },
  {
    path: 'task',
    data: { pageTitle: 'demoJHisperApp.task.home.title' },
    loadChildren: () => import('./task/task.routes'),
  },
  {
    path: 'employee',
    data: { pageTitle: 'demoJHisperApp.employee.home.title' },
    loadChildren: () => import('./employee/employee.routes'),
  },
  {
    path: 'job',
    data: { pageTitle: 'demoJHisperApp.job.home.title' },
    loadChildren: () => import('./job/job.routes'),
  },
  {
    path: 'job-history',
    data: { pageTitle: 'demoJHisperApp.jobHistory.home.title' },
    loadChildren: () => import('./job-history/job-history.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
