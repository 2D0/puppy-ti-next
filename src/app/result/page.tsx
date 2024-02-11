'use client';
import React, { useEffect, useState } from 'react';
import { percentBarData, TypeCustomTextData } from '@/interface';

//상태관리
import { useRecoilState, useRecoilValue } from 'recoil';
import { nameAtom } from '@state/index';

//스타일
import {
  PercentBarList,
  ResultBoxChar,
  ResultCharBox,
  ResultPuppyName,
  ResultTxt,
  ResultTxtBox,
} from '@styles/Result.style';

//이미지
import Intj from '@img/Character/mbti-INFP.png';
import {
  Black,
  DarkPurple,
  Gray,
  LightGray,
  LightPurple,
  Purple,
} from '@styles/Common.style';

//컴포넌트
import Image from 'next/image';
import { TextSub } from '@atoms/index';
import { TitleBox } from '@molecules/index';
import PercentBar from '@molecules/PercentBar/PercentBar';

const ResultPage = () => {
  const [resultData, setResultData] = useState([]);
  const nameData = useRecoilValue(nameAtom);

  useEffect(() => {
    // setNameData(sessionStorage.getItem('dog-name'));
  }, []);
  const titleData: TypeCustomTextData = {
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

  const percentBarData: percentBarData[] = [
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
  const mbtiNameData: TypeCustomTextData = {
    bigSize: true,
    accent: {
      text: `INTJ`,
      font: true,
    },
  };

  return (
    <>
      <ResultPuppyName>
        <TitleBox titleBoxData={titleData} />
        <TextSub textSubData={{ text: '는(은)' }} />
      </ResultPuppyName>
      <ResultCharBox>
        <TitleBox titleBoxData={mbtiNameData} />
        <ResultBoxChar>
          <Image src={Intj} alt={'Intj'} />
        </ResultBoxChar>
      </ResultCharBox>
      <PercentBarList>
        {percentBarData.map(item => (
          <PercentBar key={item?.top?.first.text} percentBarData={item} />
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
