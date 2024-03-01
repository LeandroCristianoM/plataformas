import { ITask, NewTask } from './task.model';

export const sampleWithRequiredData: ITask = {
  id: 26831,
};

export const sampleWithPartialData: ITask = {
  id: 22410,
  description: 'recall',
};

export const sampleWithFullData: ITask = {
  id: 23423,
  title: 'die why',
  description: 'oh since consequently',
};

export const sampleWithNewData: NewTask = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
