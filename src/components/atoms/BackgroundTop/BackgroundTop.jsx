import React from 'react';

//스타일
import * as A from '@/components/atoms/BackgroundTop/BackgroundTop.style';

//컴포넌트
import { Lines } from '@/assets/img/Background/index';

function BackgroundTop() {
  return (
    <>
      <A.BackImgLinesTop src={Lines} />
    </>
  );
}

export default BackgroundTop;
