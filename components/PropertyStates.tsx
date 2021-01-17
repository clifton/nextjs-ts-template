import { atom, selector } from 'recoil';
import { Property } from '../interfaces/Property';

const propertiesState = atom<Property[]>({
  key: 'propertiesState',
  default: [],
});

const propertiesCount = selector({
  key: 'propertiesCount',
  get: ({ get }) => get(propertiesState).length,
});

export { propertiesState, propertiesCount };
