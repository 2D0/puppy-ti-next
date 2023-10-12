import React from 'react';
import { TypeTextData } from 'interface';

//스타일
import { SubText } from '@atoms/TextSub/TextSub.style';
import FontGugi from '@/app/api/fonts/FontGugi';

const TextSub = ({ textSubData }: { textSubData: TypeTextData }) => {
  return (
    <SubText $font={textSubData.font} $color={textSubData.color}>
      {textSubData.text}
    </SubText>
  );
};
export default TextSub;
