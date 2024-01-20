'use client';
import React from 'react';

//상태관리
import { useRecoilValue } from 'recoil';
import { percentState } from '@/app/state';

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
import PercentBar from '@/components/molecules/PercentBar/PercentBar';
import Back from '@/assets/img/Icons/ico-back.svg';
import Share from '@/assets/img/Icons/ico-share.svg';
import FireworkSvg from '@/assets/img/Icons/check-firework.svg';
import WalkingSvg from '@/assets/img/Icons/check-walking.svg';

const CheckHead = () => {
  const percent = useRecoilValue(percentState);

  const percentBarData = {
    percent: percent,
  };
  return (
    <CheckTop $percent={percent}>
      <CheckTopInner>
        <CheckTopChar>
          <WalkingSvg />
        </CheckTopChar>
      </CheckTopInner>
      <Fireworks $percent={percent}>
        <FireworksTopRight>
          <FireworkSvg />
        </FireworksTopRight>
        <FireworkLeft1>
          <FireworkSvg />
        </FireworkLeft1>
        <FireworkLeft2>
          <FireworkSvg />
        </FireworkLeft2>
        <FireworkLeft3>
          <FireworkSvg />
        </FireworkLeft3>
      </Fireworks>
      <CheckTopBar>
        <PercentBar percentBarData={percentBarData} />
      </CheckTopBar>
    </CheckTop>
  );
};

export default CheckHead;
