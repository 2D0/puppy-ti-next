'use client';
import React from 'react';
import { percentBarData } from '@/interface';

//스타일
import { A11yHidden } from '@styles/Common.style';
import {
  PercentBarWrap,
  PercentBarBox,
  PercentBarFill,
} from '@molecules/PercentBar/PercentBar.style';
import { PercentBarText } from '@styles/Result.style';
import { TextDefault } from '@atoms/index';

const PercentBar = ({ percentBarData }: { percentBarData: percentBarData }) => {
  const { top } = percentBarData || {};
  return (
    <PercentBarWrap>
      <PercentBarText>
        <TextDefault textDefaultData={top?.first} />
        <TextDefault textDefaultData={top?.last} />
      </PercentBarText>
      <PercentBarBox $percentBarData={percentBarData}>
        <PercentBarFill $percentBarData={percentBarData}>
          <A11yHidden>{percentBarData.percent}%</A11yHidden>
        </PercentBarFill>
      </PercentBarBox>
    </PercentBarWrap>
  );
};

export default PercentBar;
