import { IJob, NewJob } from './job.model';

export const sampleWithRequiredData: IJob = {
  id: 12339,
};

export const sampleWithPartialData: IJob = {
  id: 12385,
  minSalary: 26033,
};

export const sampleWithFullData: IJob = {
  id: 14598,
  jobTitle: 'Funcionario de Optimización Global',
  minSalary: 18752,
  maxSalary: 32367,
};

export const sampleWithNewData: NewJob = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
