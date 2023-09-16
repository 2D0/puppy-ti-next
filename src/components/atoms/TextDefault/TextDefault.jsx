import React from 'react';

//스타일
import { DefaultText } from '@/components/atoms/TextDefault/TextDefault.style';
import FontGugi from '@/app/api/fonts/FontGugi';

const TextDefault = ({ shape }) => {
  return (
    <DefaultText className={shape.font && FontGugi.className} color={shape.color}>
      {shape.text}
    </DefaultText>
  );
};
export default TextDefault;
