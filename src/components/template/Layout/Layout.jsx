'use client';
import React from "react";
import {BrowserRouter} from 'react-router-dom';

//컴포넌트
import {Footer, Header} from '@/components/organisms';

const Layout = ({children}) => {
  return (
    <html lang="en">
    <BrowserRouter>
      <Header/>
      <body>
        {children}
      </body>
      <Footer/>
    </BrowserRouter>
    </html>
  )
}

export default Layout;