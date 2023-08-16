'use client';
import React from 'react';
import StyledJsxRegistry from './registry';

//스타일
import GlobalStyle from '@/style/Global.style';
import * as P from '@/style/Layout.style';

//폰트
import spoqaFont from '@/api/Fonts/SpocaFonts';

//컴포넌트
import { Header, Footer } from '@/components/organisms/index';
import LineBackground from '@/components/atoms/LineBackground/LineBackground';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />

      <html lang="en" className={spoqaFont.className}>
        <head />
        <P.Body>
          <LineBackground />
          <Header />
          <main>
            <StyledJsxRegistry>{children}</StyledJsxRegistry>
          </main>
          <Footer />
        </P.Body>
      </html>
    </>
  );
};

export default Layout;
