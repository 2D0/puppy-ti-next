import React from 'react';
import { TypeText } from 'interface';

//스타일
import { DefaultText, DefaultTextLink } from './TextDefault.style';
import FontGugi from '@/app/api/fonts/FontGugi';

const TextDefault = ({
  textDefaultData,
  addTextDefaultData,
}: {
  textDefaultData: TypeText;
  addTextDefaultData?: Omit<TypeText, 'text'>;
}) => {
  const finalTextData = Object.assign({}, textDefaultData, addTextDefaultData);
  const { url, text, target, family } = finalTextData;

  return url ? (
    <DefaultTextLink
      href={url}
      target={target || '_self'}
      $textDefaultData={finalTextData}
      className={family && FontGugi.className}
    >
      {text}
    </DefaultTextLink>
  ) : (
    <DefaultText
      $textDefaultData={finalTextData}
      className={family && FontGugi.className}
    >
      {text}
    </DefaultText>
  );
};
export default TextDefault;
