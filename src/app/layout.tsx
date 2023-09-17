'use client';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import StyledComponentsRegistry from '@/../lib/registry';

//스타일
import GlobalStyle from '@/style/Global.style';
import { Body, Main } from './layout.style';

//폰트
import spoqaFont from '@/app/api/fonts/FontSpoca';

//컴포넌트
import { BackgroundWave } from '@/components/atoms';
import { Header, Footer } from '@/components/organisms/index';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname(); //현재 주소
  console.log(pathName);
  const [scroll, setScroll] = useState<boolean>(false); //스크롤 감지
  const [percent, setPercent] = useState<number>();

  const headerData = {
    pathName: `${pathName}`,
    scroll: scroll,
    percent: percent,
  };
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />

      <html lang="en" className={spoqaFont.className}>
        <head />
        <BackgroundWave />
        <Body>
          <Header headerData={headerData} />
          <Main>{children}</Main>
          <Footer />
        </Body>
      </html>
    </StyledComponentsRegistry>
  );
};
export default Layout;
