import React from 'react';

//스타일
import * as M from '@/components/molecules/CheckHead/CheckHead.style';

//컴포넌트
import PercentBar from '@/components/molecules/PercentBar/PercentBar';

//이미지
import {FireWorkGreen, FireWorkRed, FireWorkStar, PercentChar} from '@/assets/img/icons';

const CheckHead = ({percent}) => {
  return (
    <M.CheckTop percent={percent}>
      <M.CheckTopInner>
        <M.CheckTopChar>
          <M.CheckTopRight>
            <M.CheckTopFireGreen src={FireWorkGreen}/>
            <M.CheckTopFireRed src={FireWorkRed}/>
            <M.CheckTopStarR1 src={FireWorkStar}/>
            <M.CheckTopStarR2 src={FireWorkStar}/>
            <M.CheckTopStarR3 src={FireWorkStar}/>
            <M.CheckTopStarR4 src={FireWorkStar}/>
          </M.CheckTopRight>
          <M.CheckTopLeft>
            <M.CheckTopStarL1 src={FireWorkStar}/>
            <M.CheckTopStarL2 src={FireWorkStar}/>
            <M.CheckTopStarL3 src={FireWorkStar}/>
          </M.CheckTopLeft>
          <M.CheckTopCharImg src={PercentChar}/>
        </M.CheckTopChar>
        <M.CheckTopBar>
          <PercentBar/>
        </M.CheckTopBar>
      </M.CheckTopInner>
    </M.CheckTop>
  );
};

export default CheckHead;
