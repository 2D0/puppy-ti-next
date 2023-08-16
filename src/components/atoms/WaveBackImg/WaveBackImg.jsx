import React from 'react';

//스타일
import * as A from '@/components/atoms/WaveBackImg/WaveBackImg.style';

//이미지
import Wave from '@/assets/img/background/back-wave.svg?url';

const WaveBackImg = () => {
  return (
    <>
      <A.WaveBackImgAtom src={Wave} />
    </>
  );
};
export default WaveBackImg;
