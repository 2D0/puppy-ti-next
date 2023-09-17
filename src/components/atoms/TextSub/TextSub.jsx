import React from 'react';

//스타일
import { SubText } from '@/components/atoms/TextSub/TextSub.style';
import FontGugi from '@/app/api/fonts/FontGugi';

const TextSub = ({ shape }) => {
  return (
    <SubText className={shape.font && FontGugi.className} $color={shape.color}>
      {shape.text}
    </SubText>
  );
};
export default TextSub;
