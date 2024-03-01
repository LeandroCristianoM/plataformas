import { ILocation, NewLocation } from './location.model';

export const sampleWithRequiredData: ILocation = {
  id: 31868,
};

export const sampleWithPartialData: ILocation = {
  id: 1666,
  city: 'Albacete',
  stateProvince: 'meh gadzooks',
};

export const sampleWithFullData: ILocation = {
  id: 28130,
  streetAddress: 'redouble pastel',
  postalCode: 'queasily best-seller',
  city: 'Sevilla',
  stateProvince: 'because',
};

export const sampleWithNewData: NewLocation = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
