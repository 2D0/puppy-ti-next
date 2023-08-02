'use client';
import React from 'react';
import StyledJsxRegistry from './registry';
import { Header, Footer } from '@/components/organisms/index';

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
