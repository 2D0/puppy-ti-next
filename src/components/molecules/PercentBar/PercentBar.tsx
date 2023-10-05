'use client';
import React from 'react';
import { percentBarData } from '@/./../interface';

//스타일
import { A11yHidden } from '@/style/Common.style';
import { PercentBarWrap, PercentBarBox, PercentBarFill } from '@/components/molecules/PercentBar/PercentBar.style';
import { PercentBarText } from '@/style/Result.style';
import { TextDefault } from '@/components/atoms';

const PercentBar = ({ shape }: { shape: percentBarData }) => {
  return (
    <PercentBarWrap>
      <PercentBarText>
        <TextDefault shape={shape.top?.first} />
        <TextDefault shape={shape.top?.last} />
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
