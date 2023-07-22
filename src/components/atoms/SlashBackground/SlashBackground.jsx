import React from 'react';

//스타일
import * as A from '@/components/atoms/SlashBackground/SlashBackground.style';

//이미지
import {Slash} from '@/assets/img/background/index.js';

const SlashBackground = () => {
  return (
    <>
      <A.SlashBackgroundAtom src={Slash}/>
    </>
  );
};
export default SlashBackground;
