import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 15343,
};

export const sampleWithPartialData: IEmployee = {
  id: 210,
  lastName: 'Muñiz Batista',
  email: 'Jacobo.OlivasAmador96@gmail.com',
  hireDate: dayjs('2024-02-27T21:29'),
};

export const sampleWithFullData: IEmployee = {
  id: 3706,
  firstName: 'Pedro',
  lastName: 'Guzmán Tijerina',
  email: 'Natalia78@hotmail.com',
  phoneNumber: 'pretest sore',
  hireDate: dayjs('2024-02-27T19:02'),
  salary: 4511,
  commissionPct: 12977,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
