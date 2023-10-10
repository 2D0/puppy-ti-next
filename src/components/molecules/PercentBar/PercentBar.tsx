'use client';
import React from 'react';
import { percentBarData } from 'interface';

//스타일
import { A11yHidden } from '@styles/Common.style';
import { PercentBarWrap, PercentBarBox, PercentBarFill } from '@/components/molecules/PercentBar/PercentBar.style';
import { PercentBarText } from '@styles/Result.style';
import { TextDefault } from '@atoms/index';

const PercentBar = ({ shape }: { shape: percentBarData }) => {
  return (
    <PercentBarWrap>
      <PercentBarText>
        <TextDefault textDefaultShape={shape.top?.first} />
        <TextDefault textDefaultShape={shape.top?.last} />
      </PercentBarText>
      <PercentBarBox $shape={shape}>
        <PercentBarFill $percent={shape?.percent}>
          <A11yHidden>{shape?.percent}%</A11yHidden>
        </PercentBarFill>
      </PercentBarBox>
    </PercentBarWrap>
  );
};

export default PercentBar;
