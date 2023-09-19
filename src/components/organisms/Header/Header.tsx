'use client';
import React, { useEffect, useState } from 'react';
import { TypeHeaderData } from '@/app/TypeData';

//스타일
import { HeaderCont, HeaderInner, HeaderLogo } from '@/components/organisms/Header/Header.style';

//컴포넌트
import CheckHead from '@/components/molecules/CheckHead/CheckHead';
import { SvgComponent } from '@/components/atoms';
import { UseContextData } from '@/app/ContextData';

//이미지
const imageData = {
  name: 'LOGO',
};
export function Header() {
  const [scroll, setScroll] = useState<boolean>(false); //스크롤 감지

  const { pathName, percent, colorChange } = UseContextData();

  //props 데이터
  const headerData = {
    pathName: `${pathName}`,
    scroll: scroll,
    percent: percent,
    colorChange: colorChange,
  };
  const handleScroll = () => {
    const scrollPosition = window.scrollY; //스크롤 위치
    setScroll(scrollPosition > 20);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scroll]);

  return (
    <HeaderCont $headerData={headerData.colorChange}>
      <HeaderInner $scroll={scroll}>
        <HeaderLogo href={'/'} $headerData={headerData.logoChange}>
          <SvgComponent imageData={imageData} />
        </HeaderLogo>
      </HeaderInner>
      {/*{headerData.pathName === '/check' && <CheckHead percent={headerData.percent} />}*/}
    </HeaderCont>
  );
}
export default Header;
