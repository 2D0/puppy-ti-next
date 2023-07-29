import { Header } from '@/components/organisms/Header/Header';
import React from 'react';
// import { BrowserRouter } from 'react-router-dom';

//컴포넌트

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {/* <BrowserRouter> */}
        <main>{children}</main>
        {/* </BrowserRouter> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
};

export default Layout;
