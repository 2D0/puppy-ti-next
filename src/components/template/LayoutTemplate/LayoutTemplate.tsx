'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import { UseContextData } from '@/app/ContextData';

//스타일
import { Black, LightPurple, WhitePurple } from '@/style/Common.style';
import { Main } from './LayoutTemplate.style';

//컴포넌트
import { Header, Footer, Background } from '@/components/organisms/index';
import { Share, RowTextList } from '@/components/molecules';

const LayoutTemplate = ({ children }) => {
  const pathName = usePathname(); //현재 주소
  const [useBackground, setUseBackground] = useState<boolean>(true);
  const [useShare, setUseShare] = useState<boolean>(true); //공유하기

  //ContextData
  const { testCount, setTestCount, setColorChange, percent } = UseContextData();

  //참여 횟수 디비에서 가져오기
  const getCountData = async () => {
    await axios({
      url: '/main-data',
      method: 'GET',
    })
      .then(response => {
        setTestCount(response.data.count);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getCountData();
  }, []);

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
      <Main>
        {children}

        <RowTextList textListData={textListData} />
        {useShare && <Share />}
        {useBackground && <Background />}
      </Main>
      <Footer />
    </>
  );
};
export default LayoutTemplate;
