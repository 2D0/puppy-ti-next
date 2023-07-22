import React from 'react';

//스타일
import * as A from '@/components/atoms/AccentText/AccentTxet.style';

const AccentText = ({accentText}) => {
  return (
    <A.AccentTextAtom>
      {accentText}
    </A.AccentTextAtom>
  );
};
export default AccentText;
