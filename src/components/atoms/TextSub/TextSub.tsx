import React from 'react';
import { TypeTextData } from 'interface';

//스타일
import { SubText } from '@atoms/TextSub/TextSub.style';
import FontGugi from '@/app/api/fonts/FontGugi';

const TextSub = ({ textSubShape }: { textSubShape: TypeTextData }) => {
  return (
    <SubText $font={textSubShape.font} $color={textSubShape.color}>
      {textSubShape.text}
    </SubText>
  );
};
export default TextSub;
