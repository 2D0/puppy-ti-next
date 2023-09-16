import React from 'react';

//스타일
import * as A from '@/components/atoms/ButtonBack/ButtonBack.style';
import backButtonText from '@/components/atoms/TextButton/TextButton';

//이미지
// import {Back} from '@/assets/img/icons/page.jsx.js';

const ButtonBack = ({ backButtonImg }) => {
  return (
    <A.BackButtonAtom href={'/'}>
      {/*<A.BackButtonImg src={Back} alt="메인으로 가기"/>*/}
      <A.BackButtonImg>{backButtonImg}</A.BackButtonImg>
      <backButtonText />
    </A.BackButtonAtom>
  );
};
export default ButtonBack;
