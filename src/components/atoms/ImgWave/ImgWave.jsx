import React from 'react';

//스타일
import * as A from '@atoms/ImgWave/ImgWave.style';

//이미지
import { Wave } from '@/assets/img/background/index.ts';

const ImgWave = () => {
  return (
    <>
      <A.WaveBackImgAtom src={Wave} />
    </>
  );
};
export default ImgWave;
