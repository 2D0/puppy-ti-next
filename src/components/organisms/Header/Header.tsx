'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

//상태관리
import { useRecoilValue } from 'recoil';
import { colorChangeState, percentState } from '@state/index';

//스타일
import { HeaderCont, HeaderInner, HeaderLogo } from './Header.style';

//컴포넌트
import { SvgComponent } from '@atoms/index';
import { CheckHead } from '@molecules/index';

export function Header() {
  const pathName = usePathname(); //현재 주소
  const [scroll, setScroll] = useState<boolean>(false); //스크롤 감지
  const colorChange = useRecoilValue(colorChangeState);
  const percent = useRecoilValue(percentState);

  //스크롤 시 헤더 및 그림자 효과
  const handleScroll = () => {
    const scrollPosition = window.scrollY; //스크롤 위치
    setScroll(scrollPosition > 20);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderCont $headerData={{ color: colorChange, scroll: scroll }}>
      <HeaderInner>
        <HeaderLogo href={'/'}>
          <SvgComponent imageData={{ name: 'LOGO' }} />
        </HeaderLogo>
      </HeaderInner>

      {pathName === '/check' && <CheckHead />}
    </HeaderCont>
  );
}
export default Header;
