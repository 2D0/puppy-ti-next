import React from 'react';
import { TypeTextData } from '@/interface';

//스타일
import {
  DefaultText,
  DefaultTextLink,
} from '@atoms/TextDefault/TextDefault.style';
import { FontSpoca } from '@fonts/index';

const TextDefault = ({
  textDefaultData,
}: {
  textDefaultData: TypeTextData;
}) => {
  const { url, text, color, family } = textDefaultData || {};

  return (
    <>
      {url ? (
        <DefaultTextLink
          href={url}
          className={family?.className ?? FontSpoca.className}
          $color={color}
        >
          {text}
        </DefaultTextLink>
      ) : (
        <DefaultText
          className={family?.className ?? FontSpoca.className}
          $color={color}
        >
          {text}
        </DefaultText>
      )}
    </>
  );
};
export default TextDefault;
