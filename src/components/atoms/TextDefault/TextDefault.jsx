import React from 'react';

//스타일
import { DefaultText } from '@/components/atoms/TextDefault/TextDefault.style';
import gugiFont from '@/app/api/fonts/GugiFont';

const TextDefault = ({ data, font }) => {
  return <DefaultText className={font && gugiFont.className}>{data}</DefaultText>;
};
export default TextDefault;
