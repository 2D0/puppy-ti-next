import React from 'react';

//스타일
import * as A from '@/components/atoms/ShareButton/ShareButton.style';

const ShareButton = ({snsImg}) => {
  return (
    <A.ShareButtonAtom href='/'>
      <img src={snsImg} />
    </A.ShareButtonAtom>
  );
};
export default ShareButton;
