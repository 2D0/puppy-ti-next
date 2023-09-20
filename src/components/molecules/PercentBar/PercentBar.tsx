import React from 'react';

//스타일
import { A11yHidden } from '@/style/Common.style';
import { PercentBar, PercentBarFill } from '@/components/molecules/PercentBar/PercentBar.style';

const CheckHead = ({ percent }) => {
  return (
    <PercentBar $percent={percent}>
      <PercentBarFill $percent={percent}>
        <A11yHidden>{percent}%</A11yHidden>
      </PercentBarFill>
    </PercentBar>
  );
};

export default CheckHead;
