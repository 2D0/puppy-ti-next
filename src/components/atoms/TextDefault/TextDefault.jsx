import React from 'react';

//스타일
import { DefaultText } from '@/components/atoms/TextDefault/TextDefault.style';
import gugiFont from '@/app/api/fonts/GugiFont';

const TextDefault = ({ shape }) => {
  return (
    <DefaultText className={shape.font && gugiFont.className} color={shape.color}>
      {shape.text}
    </DefaultText>
  );
};
export default TextDefault;
