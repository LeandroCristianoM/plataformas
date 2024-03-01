import { IRegion, NewRegion } from './region.model';

export const sampleWithRequiredData: IRegion = {
  id: 12120,
};

export const sampleWithPartialData: IRegion = {
  id: 29207,
  regionName: 'boldly apropos survival',
};

export const sampleWithFullData: IRegion = {
  id: 7059,
  regionName: 'sweetly',
};

export const sampleWithNewData: NewRegion = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
