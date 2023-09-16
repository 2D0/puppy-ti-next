'use client';
import React from 'react';
import StyledComponentsRegistry from '@/../lib/registry';

//스타일
import GlobalStyle from '@/style/Global.style';
import { Body, Main } from './layout.style';

//폰트
import spoqaFont from '@/app/api/fonts/SpocaFonts';

//컴포넌트
import { Header, Footer } from '@/components/organisms/index';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyle />

      <html lang="en" className={spoqaFont.className}>
        <head />
        <Body>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </Body>
      </html>
    </StyledComponentsRegistry>
  );
};
export default Layout;
