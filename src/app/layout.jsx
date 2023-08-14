'use client';
import React from 'react';
import StyledJsxRegistry from './registry';
import { Header, Footer } from '@/components/organisms/index';
import GlobalStyle from '@/style/Global.style';
import spoqaFont from '@/api/Fonts/SpocaFonts';
import gugiFont from '@/api/Fonts/GugiFont';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />

      <html lang="en" className={spoqaFont.className}>
        <head />
        <body>
          <Header />
          <main>
            <StyledJsxRegistry gugiFont={gugiFont}>{children}</StyledJsxRegistry>
          </main>
          <Footer />
        </body>
      </html>
    </>
  );
};

export default Layout;
