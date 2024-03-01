import { ICountry, NewCountry } from './country.model';

export const sampleWithRequiredData: ICountry = {
  id: 23968,
};

export const sampleWithPartialData: ICountry = {
  id: 5973,
  countryName: 'before',
};

export const sampleWithFullData: ICountry = {
  id: 25043,
  countryName: 'yum',
};

export const sampleWithNewData: NewCountry = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
