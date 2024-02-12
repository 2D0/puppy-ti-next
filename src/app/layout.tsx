import React from 'react';
import { RecoilProvider } from '@lib/providers';
import { Metadata } from 'next';

//폰트
import { FontSpoca } from '@fonts/index';

//컴포넌트
import ClientLayout from '@app/clientLayout';

//head태그 meta data
export const metadata: Metadata = {
  title: '퍼피티아이',
  description: '강아지 MBTI 테스트',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={FontSpoca.className}>
      <ClientLayout children={children} />
    </html>
  );
};
export default Layout;
