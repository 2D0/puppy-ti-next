import React from 'react';

//스타일
import * as A from './CheckHead.style';

//이미지
import { FireWorkGreen, FireWorkRed, FireWorkStar, PercentChar } from '@/assets/img/icons';
import { PercentBar, PercentBarFill } from '@/components/molecules/PercentBar/PercentBar.style';
import { A11yHidden } from '@/style/Common.style';
import { SvgComponent } from '@/components/atoms';

const CheckHead = ({ percent }) => {
  return (
    <A.CheckTop percent={percent}>
      <A.CheckTopInner>
        <A.CheckTopChar>
          <SvgComponent imageData={{ name: 'WALKING' }} />
          <A.CheckTopRight>
            <SvgComponent imageData={{ name: 'FIREWORK' }} />
          </A.CheckTopRight>
        </A.CheckTopChar>
        <A.CheckTopBar>
          <PercentBar>
            <PercentBarFill percent={percent}>
              <A11yHidden>{percent}%</A11yHidden>
            </PercentBarFill>
          </PercentBar>
        </A.CheckTopBar>
      </A.CheckTopInner>
    </A.CheckTop>
  );
};

export default CheckHead;
