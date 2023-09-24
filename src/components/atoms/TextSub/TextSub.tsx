import React from 'react';
import { TypeTextData } from '@/app/TypeData';

//스타일
import { SubText } from '@/components/atoms/TextSub/TextSub.style';
import FontGugi from '@/app/api/fonts/FontGugi';

const TextSub = ({ shape }: { shape: TypeTextData }) => {
  return (
    <SubText $font={shape.font} $color={shape.color}>
      {shape.text}
    </SubText>
  );
};
export default TextSub;
