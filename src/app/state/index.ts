import { atom, RecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const recoilSessionStorage = typeof window !== 'undefined' ? window.sessionStorage : null;

const { persistAtom } = recoilPersist({
  key: 'recoilSessionStorage',
  storage: recoilSessionStorage,
});

export const nameAtom: RecoilState<string | undefined> = atom({
  key: 'nameAtom',
  default: '',
  effects_UNSTABLE: [persistAtom],
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
