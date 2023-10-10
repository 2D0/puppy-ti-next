import React from 'react';
import { TypeTextData } from 'interface';

//스타일
import { DefaultText, DefaultTextLink } from '@atoms/TextDefault/TextDefault.style';
import FontGugi from '@/app/api/fonts/FontGugi';

const TextDefault = ({ textDefaultShape }: { textDefaultShape: TypeTextData }) => {
  return (
    <>
      {textDefaultShape?.url ? (
        <DefaultTextLink href={textDefaultShape?.url} className={textDefaultShape?.font && FontGugi.className} $color={textDefaultShape?.color}>
          {textDefaultShape?.text}
        </DefaultTextLink>
      ) : (
        <DefaultText className={textDefaultShape?.font && FontGugi.className} $color={textDefaultShape?.color}>
          {textDefaultShape?.text}
        </DefaultText>
      )}
    </>
  );
};
export default TextDefault;
