'use client';
import React from 'react';
import { RecoilRoot } from 'recoil';
import {
  StyledComponentsProvider,
  ReactQueryProvider,
  MbtiProvider,
} from '@lib/providers';
import GlobalStyle from '@styles/Global.style';
import LayoutTemplate from '@template/LayoutTemplate/LayoutTemplate';

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactQueryProvider>
      <RecoilRoot>
        <MbtiProvider>
          <StyledComponentsProvider>
            <GlobalStyle />
            <LayoutTemplate children={children} />
          </StyledComponentsProvider>
        </MbtiProvider>
      </RecoilRoot>
    </ReactQueryProvider>
  );
};
export default ClientLayout;
