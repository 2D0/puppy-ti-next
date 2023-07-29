'use client';
import React from "react";
import {BrowserRouter} from 'react-router-dom';
import * as T from '@/app/layout.style'

//컴포넌트
import {Header, Footer} from '@/components/organisms';

const Layout = ({children}) => {
  return (
    <html lang="en">
      <BrowserRouter>
        <T.Wrap>
          <Header/>
          {children}
          <Footer/>
        </T.Wrap>
      </BrowserRouter>
    </html>
  )
}

export default Layout;