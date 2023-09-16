import React from 'react';

//스타일
import * as M from '@/components/molecules/PercentBar/PercentBar.style';
import * as C from '@/style/Common.style';

const CheckHead = ({percent}) => {
  return (
    <M.PercentBar percent={percent}>
      <M.PercentBarFill>
        <C.A11yHidden>{percent}%</C.A11yHidden>
      </M.PercentBarFill>
    </M.PercentBar>
  );
};

export default CheckHead;
