import React from 'react';

//스타일
import { SubText } from '@/components/atoms/TextSub/TextSub.style';
import gugiFont from '@/app/api/fonts/GugiFont';

const TextSub = ({ data, font }) => {
  return <SubText className={font && gugiFont.className}>{data}</SubText>;
};
export default TextSub;
