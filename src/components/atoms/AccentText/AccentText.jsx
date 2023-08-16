import React from 'react';

//스타일
import * as A from '@/components/atoms/AccentText/AccentTxet.style';

const AccentText = ({ shape, data }) => {
  return <A.AccentTextAtom>{data}</A.AccentTextAtom>;
};
export default AccentText;
