import React from 'react';

//스타일
import { BackgroundWrap, WaveBlock } from '@/components/atoms/BackgroundWave/BackgroundWave.style';

//이미지
import Round from '@/assets/img/Background/back-wave.svg?url';
import Image from 'next/image';

const BackgroundWave = () => {
  return (
    <BackgroundWrap>
      <WaveBlock>
        <Image src={Round} alt={'웨이브'} />
      </WaveBlock>
    </BackgroundWrap>
  );
};
export default BackgroundWave;
