import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 932,
  departmentName: 'enliven',
};

export const sampleWithPartialData: IDepartment = {
  id: 13401,
  departmentName: 'hairy trial ack',
};

export const sampleWithFullData: IDepartment = {
  id: 4191,
  departmentName: 'open hurtle woot',
};

export const sampleWithNewData: NewDepartment = {
  departmentName: 'commission',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
