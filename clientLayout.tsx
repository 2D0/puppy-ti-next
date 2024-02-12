'use client';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { StyledComponentsProvider, ReactQueryProvider } from '@lib/providers';
import GlobalStyle from '@styles/Global.style';
import LayoutTemplate from '@template/LayoutTemplate/LayoutTemplate';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <RecoilRoot>
        <StyledComponentsProvider>
          <GlobalStyle />
          <LayoutTemplate children={children} />
        </StyledComponentsProvider>
      </RecoilRoot>
    </ReactQueryProvider>
  );
};
export default ClientLayout;
