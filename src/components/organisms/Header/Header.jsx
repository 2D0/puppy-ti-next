'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

//스타일
import {
  HeaderCont,
  HeaderInner,
  HeaderLogo,
  HeaderLogoImg,
  HeaderSwitch,
  HeaderSwitchIcon,
  HeaderSwitchImg,
} from '@/components/organisms/Header/Header.style';

//컴포넌트
import CheckHead from '@/components/molecules/CheckHead/CheckHead';

//이미지
import LogoWhite from '@/assets/img/Logo/logo-white.svg?url';
import LogoBlack from '@/assets/img/Logo/logo-black.svg?url';
import TransEn from '@/assets/img/Icons/ico-trans_en.svg?url';
import TransKo from '@/assets/img/Icons/ico-trans_ko.svg?url';

export function Header({ location, percent, scrollHeader }) {
  const [logoColor, setLogoColor] = useState(null); //로고 컬러 상태

  //배경 색상에 따른 로고 색상 변경 스위치
  const switchColor = () => {
    switch (location) {
      case '/check':
        return percent === 100 ? setLogoColor(LogoWhite) : setLogoColor(LogoBlack);
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

  return (
    <HeaderCont scrollHeader={scrollHeader} location={location} percent={percent}>
      <HeaderInner>
        <HeaderLogo>
          <Link href={'/'}>
            <HeaderLogoImg src={logoColor} />
          </Link>
        </HeaderLogo>
        <HeaderSwitch>
          <HeaderSwitchIcon>
            <HeaderSwitchImg src={TransEn.src} alt="영어" />
          </HeaderSwitchIcon>
          <HeaderSwitchIcon>
            <HeaderSwitchImg src={TransKo.src} alt="한글" />
          </HeaderSwitchIcon>
        </HeaderSwitch>
      </HeaderInner>
      {location === '/check' && <CheckHead percent={percent} />}
    </HeaderCont>
  );
}
export default Header;
