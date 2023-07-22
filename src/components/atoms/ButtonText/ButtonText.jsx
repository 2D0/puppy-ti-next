import React from 'react';

//스타일
import * as A from '@/components/atoms/ButtonText/ButtonText.style';

const ButtonText = ({buttonName}) => {
  return (
    <A.ButtonTextAtom>
      {buttonName}
    </A.ButtonTextAtom>
  );
};
export default ButtonText;
