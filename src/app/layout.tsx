'use client';
import React from 'react';
import { ContextProvider } from '@/app/ContextData';
import StyledComponentsRegistry from '@/../lib/registry';
import { usePathname } from 'next/navigation';

//스타일
import GlobalStyle from '@/style/Global.style';
import { Body } from '../style/layout.style';

//폰트
import spoqaFont from '@/app/api/fonts/FontSpoca';

//컴포넌트
import LayoutTemplate from '@/components/template/LayoutTemplate/LayoutTemplate';
import Loading from '@/app/loading';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname(); //현재 주소

  return (
    <StyledComponentsRegistry>
      <ContextProvider>
        <GlobalStyle />
        <html lang="en" className={spoqaFont.className}>
          <head />
          <Body $pathName={pathName}>
            <LayoutTemplate children={children} />
          </Body>
        </html>
      </ContextProvider>
    </StyledComponentsRegistry>
  );
};
export default Layout;
