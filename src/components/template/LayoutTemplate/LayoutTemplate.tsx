'use client';
import React, { useEffect, useState } from 'react';
import { UseContextData } from '@/app/ContextData';
import { usePathname } from 'next/navigation';
import axios from 'axios';

//스타일
import { Black, LightPurple, WhitePurple } from '@/style/Common.style';
import { Main } from './LayoutTemplate.style';

//컴포넌트
import { Header, Footer, Background } from '@/components/organisms/index';
import { Share, RowTextList } from '@/components/molecules';

const LayoutTemplate = ({ children }) => {
  //ContextData
  const { testCount, setTestCount, setColorChange, percent } = UseContextData();
  const pathName = usePathname(); //현재 주소
  const [useBackground, setUseBackground] = useState<boolean>(true);
  const [useShare, setUseShare] = useState<boolean>(true); //공유하기

  //페이지 경로에 따라 Background color change 및 Component on off
  useEffect(() => {
    switch (pathName) {
      case '/':
        setColorChange(LightPurple);
        setUseBackground(true);
        setUseShare(true);
        break;
      case '/check':
        setColorChange(percent === 100 ? Black : WhitePurple);
        setUseBackground(false);
        setUseShare(false);
        break;
      case '/result':
        setColorChange(WhitePurple);
        setUseBackground(false);
        setUseShare(true);
        break;
      case '/team-members':
      case '/open-source':
      case '/inquiry':
        setColorChange(LightPurple);
        setUseBackground(true);
        setUseShare(false);
        break;
      default:
        setColorChange(LightPurple);
        setUseBackground(true);
        setUseShare(true);
    }
  }, [pathName]);

  //props 데이터
  const textListData = [
    {
      text: '참여 횟수',
      color: Black,
    },
    {
      text: testCount,
      color: Black,
    },
  ];

  return (
    <>
      <Header />
      <Main $pathName={pathName}>
        {children}

        <RowTextList textListData={textListData} />
        {useShare && <Share />}
      </Main>
      <Background useBackground={useBackground} />
      <Footer />
    </>
  );
};
export default LayoutTemplate;
