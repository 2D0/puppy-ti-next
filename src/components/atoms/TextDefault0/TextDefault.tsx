import React from 'react';
import { TypeTextData } from 'interface';

//폰트
import FontGugi from '@/app/api/fonts/FontGugi';

//스타일
import {
  DefaultText,
  DefaultTextLink,
} from '@atoms/TextDefault0/TextDefault.style';

const TextDefault = ({
  textDefaultData,
}: {
  textDefaultData: TypeTextData;
}) => {
  const { url, font, color, text } = textDefaultData || {};

  return (
    <>
      {url ? (
        <DefaultTextLink
          href={url}
          className={font && FontGugi.className}
          $color={color}
        >
          {text}
        </DefaultTextLink>
      ) : (
        <DefaultText className={font && FontGugi.className} $color={color}>
          {text}
        </DefaultText>
      )}
    </>
  );
};
export default TextDefault;
