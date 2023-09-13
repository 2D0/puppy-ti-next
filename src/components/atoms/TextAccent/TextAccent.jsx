import React from 'react';

//스타일
import * as A from '@/components/atoms/TextAccent/TextAccent.style';

const TextAccent = ({ shape, data }) => {
  return <A.AccentTextAtom>{data}</A.AccentTextAtom>;
};
export default TextAccent;
