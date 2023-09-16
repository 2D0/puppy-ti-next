import React from 'react';

//스타일
import * as A from '@/components/atoms/TextButton/TextButton.style';

const TextButton = ({ buttonName }) => {
  return <A.ButtonTextAtom>{buttonName}</A.ButtonTextAtom>;
};
export default TextButton;
