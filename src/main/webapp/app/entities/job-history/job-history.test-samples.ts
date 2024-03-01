import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 10522,
};

export const sampleWithPartialData: IJobHistory = {
  id: 9799,
  startDate: dayjs('2024-02-28T03:31'),
  endDate: dayjs('2024-02-28T12:51'),
};

export const sampleWithFullData: IJobHistory = {
  id: 13400,
  startDate: dayjs('2024-02-28T08:45'),
  endDate: dayjs('2024-02-28T03:43'),
  language: 'FRENCH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
