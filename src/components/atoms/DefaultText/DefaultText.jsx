import React from 'react';

//스타일
import { DefaultTextAtom } from '@/components/atoms/DefaultText/DefaultText.style';

const DefaultText = ({ data }) => {
  return <DefaultTextAtom>{data}</DefaultTextAtom>;
};
export default DefaultText;
