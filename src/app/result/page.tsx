'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

//상태관리
import { useRecoilState, useRecoilValue } from 'recoil';
import { nameAtom } from '@app/state';

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
  SizeExtraRem,
  SizeMediumLargeRem,
} from '@styles/Common.style';

//컴포넌트
import { TextDefault } from '@atoms/index';
import { TitleBox } from '@molecules/index';
import PercentBar from '@molecules/PercentBar/PercentBar';
import { percentBarData, TypeTitleBoxData } from 'interface';

const ResultPage = () => {
  const [resultData, setResultData] = useState([]);
  const nameData = useRecoilValue(nameAtom);

  useEffect(() => {
    // setNameData(sessionStorage.getItem('dog-name'));
  }, []);
  const commonTitle = {
    size: SizeMediumLargeRem,
  };
  const titleData = {
    first: {
      ...commonTitle,
      text: '"',
      color: DarkPurple,
    },
    accent: {
      ...commonTitle,
      text: `${nameData}`,
      color: Purple,
      font: 'gugi',
    },
    last: {
      ...commonTitle,
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
  const mbtiNameData = {
    bigSize: true,
    accent: {
      text: `INTJ`,
      font: 'gugi',
      size: SizeExtraRem,
    },
  };

  return (
    <>
      <ResultPuppyName>
        <TitleBox titleBoxData={titleData} />
        <TextDefault
          textDefaultData={{ text: '는(은)', size: '2.25rem', family: 'gugi' }}
        />
      </ResultPuppyName>
      <ResultCharBox>
        <TitleBox titleBoxData={mbtiNameData} />
        <ResultBoxChar>
          <Image src={Intj} alt={'Intj'} />
        </ResultBoxChar>
      </ResultCharBox>
      <PercentBarList>
        {percentBarData.map(item => (
          <PercentBar key={item.top.first.text} percentBarData={item} />
        ))}
      </PercentBarList>
      <ResultTxtBox>
        <TextDefault textDefaultData={{ text: '결과', size: '1rem' }} />
      </ResultTxtBox>
      <ResultTxtBox>
        <TextDefault textDefaultData={{ text: '결과', size: '1rem' }} />
      </ResultTxtBox>
    </>
  );
};
export default ResultPage;
