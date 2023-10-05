'use client';
import React, { useEffect, useState } from 'react';
import { TypeHeaderData } from '@/./../interface';

//상태관리
import { colorChangeState, percentState } from '@/app/state';

//스타일
import { HeaderCont, HeaderInner, HeaderLogo } from '@/components/organisms/Header/Header.style';

//컴포넌트
import CheckHead from '@/components/molecules/CheckHead/CheckHead';
import { SvgComponent } from '@/components/atoms';
import { usePathname } from 'next/navigation';
import { useRecoilValue } from 'recoil';

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
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scroll]);

  return (
    <HeaderCont $headerData={colorChange} $scroll={scroll}>
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
