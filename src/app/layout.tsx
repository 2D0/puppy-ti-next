'use client';
import React from 'react';
import StyledComponentsRegistry from '@/../lib/registry';
import { ContextProvider } from '@/app/ContextData';

//스타일
import GlobalStyle from '@/style/Global.style';
import { Body } from './layout.style';

//폰트
import spoqaFont from '@/app/api/fonts/FontSpoca';

//컴포넌트
import LayoutTemplate from '@/components/template/LayoutTemplate/LayoutTemplate';
import { usePathname } from 'next/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname(); //현재 주소

  return (
    <ContextProvider>
      <StyledComponentsRegistry>
        <GlobalStyle />
        <html lang="en" className={spoqaFont.className}>
          <head />
          <Body $pathName={pathName}>
            <LayoutTemplate children={children} />
          </Body>
        </html>
      </StyledComponentsRegistry>
    </ContextProvider>
  );
};
export default Layout;
