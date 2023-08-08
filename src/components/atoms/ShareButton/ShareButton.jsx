import React from 'react';
import image from 'next/image'

//스타일
import * as A from '@/components/atoms/ShareButton/ShareButton.style';

const ShareButton = ({snsImg}) => {
  return (
    <A.ShareButtonAtom href='/'>
      <image src={`${location.href}${snsImg}`} />
    </A.ShareButtonAtom>
  );
};
export default ShareButton;
