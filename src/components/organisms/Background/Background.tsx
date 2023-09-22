'use client';
import React from 'react';

//스타일
import { BackgroundWrap, WaveBlock, SlashTop, SlashBottom } from '@/components/organisms/Background/Background.style';

//이미지
import { ReactComponent as WaveSvg } from '@/assets/img/Background/back-top-wave.svg';
import { ReactComponent as SlashSvg } from '@/assets/img/Background/back-slash.svg';

const Background = ({ useBackground }) => {
  return (
    <BackgroundWrap>
      {useBackground && (
        <WaveBlock>
          <WaveSvg />
        </WaveBlock>
      )}
      <SlashTop>
        <SlashSvg />
      </SlashTop>
      <SlashBottom>
        <SlashSvg />
      </SlashBottom>
    </BackgroundWrap>
  );
};
export default Background;
