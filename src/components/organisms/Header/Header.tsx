'use client';
import React from 'react';
import { TypeHeaderData } from '@/app/TypeData';

//스타일
import { HeaderCont, HeaderInner, HeaderLogo } from '@/components/organisms/Header/Header.style';

//컴포넌트
import CheckHead from '@/components/molecules/CheckHead/CheckHead';
import { SvgComponent } from '@/components/atoms';

//이미지
const imageData = {
  name: 'LOGO',
};
export function Header({ headerData }: { headerData: TypeHeaderData }) {
  return (
    <HeaderCont $headerData={headerData.colorChange}>
      <HeaderInner>
        <HeaderLogo href={'/'} $headerData={headerData.logoChange}>
          <SvgComponent imageData={imageData} />
        </HeaderLogo>
      </HeaderInner>
      {/*{headerData.pathName === '/check' && <CheckHead percent={headerData.percent} />}*/}
    </HeaderCont>
  );
}
export default Header;
