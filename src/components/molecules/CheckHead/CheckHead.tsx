'use client';
import React from 'react';

//상태관리
import { useRecoilValue } from 'recoil';
import { percentState } from '@state/index';

//스타일
import * as A from './CheckHead.style';
import {
  CheckTop,
  CheckTopInner,
  CheckTopBar,
  CheckTopChar,
  Fireworks,
  FireworkLeft1,
  FireworkLeft2,
  FireworkLeft3,
  FireworksTopRight,
} from './CheckHead.style';

//이미지
import { SvgComponent } from '@atoms/index';
import { PercentBar } from '@molecules/index';

const CheckHead = () => {
  const percent = useRecoilValue(percentState);

  const percentBarData = {
    percent: percent,
  };
  return (
    <CheckTop $percent={percent}>
      <CheckTopInner>
        <CheckTopChar>
          <SvgComponent imageData={{ name: 'WALKING' }} />
        </CheckTopChar>
      </CheckTopInner>
      <Fireworks $percent={percent}>
        <FireworksTopRight>
          <SvgComponent imageData={{ name: 'FIREWORK' }} />
        </FireworksTopRight>
        <FireworkLeft1>
          <SvgComponent imageData={{ name: 'FIREWORK' }} />
        </FireworkLeft1>
        <FireworkLeft2>
          <SvgComponent imageData={{ name: 'FIREWORK' }} />
        </FireworkLeft2>
        <FireworkLeft3>
          <SvgComponent imageData={{ name: 'FIREWORK' }} />
        </FireworkLeft3>
      </Fireworks>
      <CheckTopBar>
        <PercentBar percentBarData={percentBarData} />
      </CheckTopBar>
    </CheckTop>
  );
};

export default CheckHead;
