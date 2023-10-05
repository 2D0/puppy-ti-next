import React from 'react';
import { TypeTextData } from '@/./../interface';

//스타일
import { DefaultText, DefaultTextLink } from '@/components/atoms/TextDefault/TextDefault.style';
import FontGugi from '@/app/api/fonts/FontGugi';

const TextDefault = ({ shape }: { shape: TypeTextData }) => {
  return (
    <>
      {shape?.url ? (
        <DefaultTextLink href={shape?.url} className={shape?.font && FontGugi.className} $color={shape?.color}>
          {shape?.text}
        </DefaultTextLink>
      ) : (
        <DefaultText className={shape?.font && FontGugi.className} $color={shape?.color}>
          {shape?.text}
        </DefaultText>
      )}
    </>
  );
};
export default TextDefault;
