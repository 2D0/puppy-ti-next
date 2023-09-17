import React from 'react';
import { TypeTextData } from '@/app/TypeData';

//스타일
import { DefaultText, DefaultTextLink } from '@/components/atoms/TextDefault/TextDefault.style';
import FontGugi from '@/app/api/fonts/FontGugi';

const TextDefault = ({ shape }: { shape: TypeTextData }) => {
  console.log(shape.url);
  const DefaultTextComponent = shape.url ? DefaultText : DefaultTextLink;
  return (
    <DefaultTextComponent className={shape.font && FontGugi.className} $color={shape.color}>
      {shape.text}
    </DefaultTextComponent>
  );
};
export default TextDefault;
