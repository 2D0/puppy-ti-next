import React from 'react';
import { Metadata } from 'next';

//폰트
import spoqaFont from '@/app/api/fonts/FontSpoca';
import RecoilRootProvider from '@/RecoilProvider';

//head태그 meta data
export const metadata: Metadata = {
  title: '퍼피티아이',
  description: '강아지 MBTI 테스트',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={spoqaFont.className}>
      <RecoilRootProvider children={children} />
    </html>
  );
};
export default Layout;
