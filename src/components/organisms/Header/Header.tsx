'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TypeHeaderData } from '@/app/TypeData';

//스타일
import { HeaderCont, HeaderInner, HeaderLogo, HeaderLogoImg } from '@/components/organisms/Header/Header.style';

//컴포넌트
import CheckHead from '@/components/molecules/CheckHead/CheckHead';
// import Logo from '@/assets/img/Logo/logo.svg?;

//이미지
import LogoWhite from '@/assets/img/Logo/logo-white.svg?url';
import LogoBlack from '@/assets/img/Logo/logo-black.svg?url';
import { WhitePurple } from '@/style/Common.style';
// import Logo from '@/assets/img/Logo/logo.svg?url';

export function Header({ headerData }: { headerData: TypeHeaderData }) {
  const [logoColor, setLogoColor] = useState<string>(LogoWhite); //로고 컬러 상태

  //배경 색상에 따른 로고 색상 변경 스위치
  const switchColor = () => {
    switch (headerData.pathName) {
      case '/check':
        return WhitePurple;
      case '/result':
        return setLogoColor(LogoBlack.src);
      default:
        return setLogoColor(LogoWhite.src);
    }
  };

  //배경 색상 변경 감지
  useEffect(() => {
    switchColor();
  }, [headerData.percent, headerData.pathName]);

  return (
    <HeaderCont $headerData={headerData}>
      <HeaderInner>
        <HeaderLogo>
          <Link href={'/'}>
            {/*<HeaderLogoImg src={LogoWhite.src} />*/}
            {/*<Logo />*/}
          </Link>
        </HeaderLogo>
      </HeaderInner>
      {headerData.pathName === '/check' && <CheckHead percent={percent} />}
    </HeaderCont>
  );
}
export default Header;
