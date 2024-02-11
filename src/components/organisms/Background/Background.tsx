'use client';
import React from 'react';

//스타일
import {
  BackgroundWrap,
  WaveBlock,
  SlashTop,
  SlashBottom,
} from './Background.style';

//이미지
import WaveSvg from '@images/background/back-top-wave.svg';
import SlashSvg from '@images/background/back-slash.svg';

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
