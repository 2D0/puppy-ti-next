'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

//스타일
import { MainChar } from '@/style/Page.style';

//컴포넌트
import { ColumnComponent, DarkPurple, Purple, Black } from '@/style/Common.style';
import { ButtonNext, NameInput, TextSub } from '@/components/atoms/index';
import { Share, TitleBox } from '@/components/molecules/index';

//이미지
import { MainImg } from '@/assets/img/Character/index';
import RowTextList from '@/components/molecules/RowTextList/RowTextList';

const Home = () => {
  const [buttonAble, setButtonAble] = useState(false);
  const [testCount, setTestCount] = useState(0); //참여횟수
  const [nameData, setNameData] = useState(''); //반려견 이름

  //참여 횟수 디비에서 가져오기
  const getCountData = async () => {
    await axios({
      url: '/test-count',
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
    console.log(buttonAble);
  }, []);

  //input에 value있을 경우 버튼 활성화
  const inputEvent = event => {
    const { value } = event.target;
    setButtonAble(value ? true : false);
  };
  //props 데이터
  const inputData = {
    name: 'input',
    // value: nameData,
    type: 'text',
    placeholder: '반려견 이름을 적어주세요.',
    event: inputEvent,
  };
  const buttonData = {
    type: 'submit',
    url: '/check',
    able: buttonAble,
    axiosData: {
      url: '/dog-name',
      data: { name: `${nameData}` },
    },
    content: {
      text: '시작하기',
      font: true,
    },
  };
  const titleData = {
    bigSize: true,
    color: DarkPurple,
    font: true,
    accent: {
      text: '퍼피',
      color: Purple,
    },
    lastText: '티아이',
  };
  const subTextData = {
    text: '나의 반려견은 어떤 성향일까?',
    font: true,
  };
  const textListData = [
    {
      text: '참여 횟수',
      color: Black,
    },
    {
      text: testCount.toString(),
      color: Black,
    },
  ];

  return (
    <>
      <MainChar>
        <Image src={MainImg} alt={'퍼피티아이'} />
      </MainChar>
      <ColumnComponent>
        <TextSub shape={subTextData} />
        <TitleBox shape={titleData} />
      </ColumnComponent>
      <ColumnComponent>
        <NameInput inputData={inputData} />
        <ButtonNext buttonData={buttonData} />
      </ColumnComponent>
      <RowTextList textListData={textListData} />
      <Share />
    </>
  );
};
export default Home;
