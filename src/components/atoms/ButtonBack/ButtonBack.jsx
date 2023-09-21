import React from 'react';

//스타일
import * as A from '@/components/atoms/ButtonBack/ButtonBack.style';
import backButtonText from '@/components/atoms/TextButton/TextButton';

//이미지

const ButtonBack = ({ backButtonImg }) => {
  return (
    <A.BackButtonAtom href={'/'}>
      <A.BackButtonImg>{backButtonImg}</A.BackButtonImg>
      <backButtonText />
    </A.BackButtonAtom>
  );
};
export default ButtonBack;
