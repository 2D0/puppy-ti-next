'use client';
import React from 'react';
import { percentBarData } from 'interface';

//스타일
import { A11yHidden } from '@styles/Common.style';
import {
  PercentBarWrap,
  PercentBarBox,
  PercentBarFill,
} from '@molecules/PercentBar/PercentBar.style';
import { PercentBarText } from '@styles/Result.style';

//컴포넌트
import { TextDefault } from '@atoms/index';

const PercentBar = ({ percentBarData }: { percentBarData: percentBarData }) => {
  const { top, percent } = percentBarData || {};
  return (
    <PercentBarWrap>
      {top && (
        <PercentBarText>
          <TextDefault textDefaultData={top?.first} />
          <TextDefault textDefaultData={top?.last} />
        </PercentBarText>
      )}
      <PercentBarBox $percentBarData={percentBarData}>
        <PercentBarFill $percentBarData={percentBarData}>
          <A11yHidden>{percent}%</A11yHidden>
        </PercentBarFill>
      </PercentBarBox>
    </PercentBarWrap>
  );
};

export default PercentBar;
