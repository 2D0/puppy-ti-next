import { atom, RecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'sessionStorage', // 고유한 key 값
  storage: sessionStorage,
});
export const nameState: RecoilState<string> = atom({
  key: 'nameState',
  default: [],
  effects_UNSTABLE: [persistAtom],
});
// export const nameState: RecoilState<string> = atom({
//   key: 'nameState',
//   default: '',
// });
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
