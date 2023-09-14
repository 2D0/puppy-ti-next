import React from 'react';

//스타일
import { SubText } from '@/components/atoms/TextSub/TextSub.style';
import gugiFont from '@/app/api/fonts/GugiFont';

const TextSub = ({ shape }) => {
  return (
    <SubText className={shape.font && gugiFont.className} color={shape.color}>
      {shape.text}
    </SubText>
  );
};
export default TextSub;
