'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UseContextData } from '@/app/ContextData';
import Image from 'next/image';

//스타일
import {
  PercentBarList,
  PercentBarText,
  ResultBoxChar,
  ResultBoxCharImg,
  ResultBoxCharInner,
  ResultBoxMbtiName,
  ResultCharBox,
  ResultCharBoxInner,
  ResultCont,
  ResultPercentCont,
  ResultPuppyName,
  ResultPuppyNamePoint,
  ResultTxt,
  ResultTxtBox,
} from '@/style/Result.style';

//이미지
import Intj from '@/assets/img/Character/mbti-INFP.png';
import { Black, DarkPurple, Gray, LightGray, Purple } from '@/style/Common.style';

//컴포넌트
import { TextSub } from '@/components/atoms';
import { TitleBox } from '@/components/molecules';
import PercentBar from '@/components/molecules/PercentBar/PercentBar';

const ResultPage = () => {
  const { localNameData } = UseContextData();
  const [resultData, setResultData] = useState([]);
  const [nameData, setNameData] = useState();

  useEffect(() => {
    setNameData(sessionStorage.getItem('dog-name'));
  }, [nameData]);

  const titleData = {
    first: {
      text: '"',
      color: DarkPurple,
    },
    accent: {
      text: `${nameData}`,
      color: Purple,
      font: true,
    },
    last: {
      text: '"',
      color: DarkPurple,
    },
  };

  const percentBarData = [
    {
      percent: 10,
      height: true,
      top: {
        first: { text: '내향형 40%', color: Gray },
        last: { text: '외향형 60%' },
      },
    },
    {
      percent: 10,
      height: true,
      top: {
        first: { text: '직관형 25%' },
        last: { text: '감각형 75%', color: Gray },
      },
    },
    {
      percent: 10,
      height: true,
      top: {
        first: { text: '사고형 68%', color: Gray },
        last: { text: '감정형 32%' },
      },
    },
    {
      percent: 10,
      height: true,
      top: {
        first: { text: '계획형 59%', color: Gray },
        last: { text: '탐색형 41%' },
      },
    },
  ];
  const mbtiNameData = {
    bigSize: true,
    accent: {
      text: `INTJ`,
      font: true,
    },
  };
  return (
    <>
      <ResultPuppyName>
        <TitleBox shape={titleData} />
        <TextSub shape={{ text: '는(은)' }} />
      </ResultPuppyName>
      <ResultCharBox>
        <TitleBox shape={mbtiNameData} />
        <ResultBoxChar>
          <Image src={Intj} alt={'Intj'} />
        </ResultBoxChar>
      </ResultCharBox>
      <PercentBarList>
        {percentBarData.map(item => (
          <PercentBar key={item.top} shape={item} />
        ))}
      </PercentBarList>
      <ResultTxtBox>
        <ResultTxt>결과</ResultTxt>
      </ResultTxtBox>
      <ResultTxtBox>
        <ResultTxt>결과</ResultTxt>
      </ResultTxtBox>
    </>
  );
};
export default ResultPage;
