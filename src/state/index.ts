import { atom, RecoilState } from 'recoil';

export const nameAtom: RecoilState<string | undefined> = atom({
  key: 'nameAtom',
  default: '',
});

export const testCountState: RecoilState<number> = atom({
  key: 'testCountState',
  default: 0,
});

export const colorChangeState: RecoilState<string> = atom({
  key: 'colorChangeState',
  default: '',
});

export const percentState: RecoilState<number> = atom({
  key: 'percentState',
  default: 0,
});
