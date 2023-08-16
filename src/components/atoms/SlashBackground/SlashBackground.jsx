import React from 'react';

//스타일
import {SlashBackgroundAtom} from '@/components/atoms/SlashBackground/SlashBackground.style';

//이미지
import Slash from '@/assets/img/background/back-slash.svg?url';

const SlashBackground = () => {
  return (
    <>
      <SlashBackgroundAtom src={Slash} />
    </>
  );
};
export default SlashBackground;
