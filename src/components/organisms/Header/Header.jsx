<<<<<<< HEAD
import React, {useEffect, useState} from 'react';
import Link from "next/link"
=======
'use client';
import React from 'react';
>>>>>>> 7ec1ea405c13a2181f4e35d6ee322c8cb55bce05

//컴포넌트
import CheckHead from '@/components/molecules/CheckHead/CheckHead';

//스타일
import * as O from '@/components/organisms/Header/Header.style';

//이미지
<<<<<<< HEAD
import {LogoBlack, LogoWhite} from '@/assets/img/Logo/index';
import {TransEn, TransKo} from '@/assets/img/Icons/index';

const Header = ({location, percent, scrollHeader}) => {
  const [logoColor, setLogoColor] = useState(null); //로고 컬러 상태

  //배경 색상에 따른 로고 색상 변경 스위치
  const switchColor = () => {
    switch (location) {
      case '/check':
        return percent === 100 ? setLogoColor(LogoWhite.src) : setLogoColor(LogoBlack.src);
      case '/result':
        return setLogoColor(LogoBlack.src);
      default:
        return setLogoColor(LogoWhite.src);
    }
  };

  //배경 색상 변경 감지
  useEffect(() => {
    switchColor();
  }, [percent, location]);
=======
// import {LogoBlack, LogoWhite} from '@/assets/img/logo/index.js';
// import {TransEn, TransKo} from '@/assets/img/icons/index.js';
>>>>>>> 7ec1ea405c13a2181f4e35d6ee322c8cb55bce05

export function Header() {
  return (
<<<<<<< HEAD
    <O.HeaderCont scrollHeader={scrollHeader} location={location} percent={percent}>
      <O.HeaderInner>
        <O.HeaderLogo>
          <Link href={'/'}>
            <O.HeaderLogoImg src={logoColor}/>
          </Link>
        </O.HeaderLogo>
        <O.HeaderSwitch>
          <O.HeaderSwitchIcon>
            <O.HeaderSwitchImg src={TransEn.src} alt="영어"/>
          </O.HeaderSwitchIcon>
          <O.HeaderSwitchIcon>
            <O.HeaderSwitchImg src={TransKo.src} alt="한글"/>
          </O.HeaderSwitchIcon>
        </O.HeaderSwitch>
      </O.HeaderInner>

      {location === '/check' && <CheckHead percent={percent}/>}
    </O.HeaderCont>
=======
    <header>
      <div>Header</div>
    </header>
>>>>>>> 7ec1ea405c13a2181f4e35d6ee322c8cb55bce05
  );
}
