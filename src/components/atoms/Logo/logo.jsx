import React from 'react';

//스타일
import * as A from '@/components/atoms/Logo/Logo.style';

const Logo = ({logoColor}) => {
  return (
    <A.LogoAtom>
      <A.LogoImg src={logoColor}/>
    </A.LogoAtom>
  );
};
export default Logo;
