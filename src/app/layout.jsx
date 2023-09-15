'use client';
import React from 'react';
import StyledJsxRegistry from './registry';

//스타일
import GlobalStyle from '@/style/Global.style';
import { Body, Main } from '@/style/Layout.style';

//폰트
import spoqaFont from '@/app/api/fonts/SpocaFonts';

//컴포넌트
import { Header, Footer } from '@/components/organisms/index';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />

      <html lang="en" className={spoqaFont.className}>
        <head />
        <Body>
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
