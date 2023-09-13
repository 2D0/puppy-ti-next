import React from 'react';
import image from 'next/image';

//스타일
import * as A from '@/components/atoms/ButtonShare/ButtonShare.style';

const ButtonShare = ({ snsImg }) => {
  return (
    <A.ShareButtonAtom href="/">
      <image src={`${location.href}${snsImg}`} />
    </A.ShareButtonAtom>
  );
};
export default ButtonShare;
