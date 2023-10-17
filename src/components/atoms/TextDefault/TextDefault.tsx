import React from 'react';
import { TypeTextData } from 'interface';

//스타일
import {
  DefaultText,
  DefaultTextLink,
} from '@atoms/TextDefault/TextDefault.style';
import FontGugi from '@/app/api/fonts/FontGugi';

const TextDefault = ({
  textDefaultData,
}: {
  textDefaultData: TypeTextData;
}) => {
  return (
    <>
      {textDefaultData.url ? (
        <DefaultTextLink
          href={textDefaultData.url}
          className={textDefaultData.font && FontGugi.className}
          $color={textDefaultData.color}
        >
          {textDefaultData.text}
        </DefaultTextLink>
      ) : (
        <DefaultText
          className={textDefaultData.font && FontGugi.className}
          $color={textDefaultData.color}
        >
          {textDefaultData.text}
        </DefaultText>
      )}
    </>
  );
};
export default TextDefault;
