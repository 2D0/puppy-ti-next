import React from 'react';

//스타일
import * as A from '@/components/atoms/DefaultText/DefaultText.style';

const DefaultText = ({text}) => {
  return (
    <A.DefaultTextAtom>
      {text}
    </A.DefaultTextAtom>
  );
};
export default DefaultText;
