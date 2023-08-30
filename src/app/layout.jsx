'use client';
import React from 'react';
import StyledJsxRegistry from './registry';

//스타일
import GlobalStyle from '@/style/Global.style';
import { BackImgSlashBottom, BackImgSlashTop, Body, Main } from '@/style/Layout.style';

//폰트
import spoqaFont from '@/api/Fonts/SpocaFonts';

//컴포넌트
import { Header, Footer } from '@/components/organisms/index';
import SvgComponent from '@/assets/img/Icons/SvgComponent';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />

      <html lang="en" className={spoqaFont.className}>
        <head />
        <Body>
          <BackImgSlashTop>
            <SvgComponent data={'SLASH'} fill={true} />
          </BackImgSlashTop>
          <BackImgSlashBottom>
            <SvgComponent data={'SLASH'} fill={true} />
          </BackImgSlashBottom>
          <Header />
          <Main>
            <StyledJsxRegistry>{children}</StyledJsxRegistry>
          </Main>
          <Footer />
        </Body>
      </html>
    </>
  );
};

export default Layout;
