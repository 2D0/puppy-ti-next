'use client';
import React from 'react';
import StyledJsxRegistry from './registry';
import { Header, Footer } from '@/components/organisms/index';
import GlobalStyle from "@/style/Global.style";
import localFont from "next/font/local";

const gugiFont = localFont({
  src: './fonts/Gugi/Gugi-Regular.ttf',
  display: 'swap'
})
const spoqaFont = localFont({
  src: [
    {
      path: './fonts/Spoqa/SpoqaHanSansNeo-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Spoqa/SpoqaHanSansNeo-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Spoqa/SpoqaHanSansNeo-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Spoqa/SpoqaHanSansNeo-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Spoqa/SpoqaHanSansNeo-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Spoqa/SpoqaHanSansNeo-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ]
})


const Layout = ({ children }) => {
  return (
    <html lang="en" className={spoqaFont.className}>
      <GlobalStyle />
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
