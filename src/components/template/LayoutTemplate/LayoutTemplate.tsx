'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { StyledComponentsProvider, ReactQueryProvider } from '@lib/providers';

//상태관리
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { colorChangeState, percentState, testCountState } from '@state/index';

//스타일
import GlobalStyle from '@styles/Global.style';
import { Black, LightPurple, WhitePurple } from '@styles/Common.style';
import { Main, Body } from './LayoutTemplate.style';

//컴포넌트
import { Header, Footer, Background } from '@organisms/index';
import { Share, RowTextList } from '@molecules/index';
import { useGetData } from '@/src/hooks';

const LayoutTemplate = ({ children }) => {
  //ContextData
  const pathName = usePathname(); //현재 주소
  const [useBackground, setUseBackground] = useState<boolean>(true);
  const [useShare, setUseShare] = useState<boolean>(true); //공유하기
  // const testCount = useRecoilValue(testCountState);
  const setColorChange = useSetRecoilState(colorChangeState);
  const percent = useRecoilValue(percentState);

  const { data: testCount } = useGetData({
    tableName: 'result_user_list',
  });

  //페이지 경로에 따라 background color change 및 Component on off
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
      text: testCount?.length ?? '',
      color: Black,
    },
  ];

  return (
    <Body $pathName={pathName} $percent={percent}>
      <Header />
      <Main $pathName={pathName}>
        {children}
        <RowTextList textListData={textListData} />
        {useShare && <Share />}
      </Main>
      <Background useBackground={useBackground} />
      <Footer />
    </Body>
  );
};
export default LayoutTemplate;
