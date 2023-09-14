'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

//스타일
import { MainChar } from '@/style/Page.style';

//컴포넌트
import { ButtonNext, BackgroundWave, NameInput, TextDefault, TextSub } from '@/components/atoms/index';
import { Share, TitleBox } from '@/components/molecules/index';

//이미지
import { MainImg } from '@/assets/img/Character/index';
import { ColumnComponent, RowText, DarkPurple, Purple, TextList, Black } from '@/style/Common.style';

const Home = () => {
  const [buttonAble, setButtonAble] = useState(false);
  const [testCount, setTestCount] = useState(null); //참여횟수
  let nameData = ''; //반려견 이름

  //참여 횟수 디비에서 가져오기
  const getData = async () => {
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

  //입력한 이름 디비에 전송
  const postData = async () => {
    await axios({
      url: '/dog-name',
      method: 'POST',
      data: { name: `${nameData}` },
    })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  //input에 value있을 경우 버튼 활성화
  const inputEvent = e => {
    const { value } = e.target;
    setButtonAble(value && true);
    nameData = value;
  };

  //props 데이터
  const inputData = {
    name: 'input',
    type: 'text',
    placeholder: '반려견 이름을 적어주세요.',
    event: inputEvent,
  };
  const buttonData = {
    type: 'button',
    url: '/check',
    able: buttonAble,
    event: postData,
    content: {
      text: '시작하기',
      font: true,
    },
  };
  const titleData = {
    size: 'BIG',
    color: DarkPurple,
    font: true,
    accent: {
      text: '퍼피',
      color: Purple,
    },
    last: '티아이',
  };
  const subTextData = {
    text: '나의 반려견은 어떤 성향일까?',
    font: true,
  };
  const textList = [
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
      <BackgroundWave />
      <MainChar>
        <Image src={MainImg} />
      </MainChar>
      <ColumnComponent>
        <TextSub shape={subTextData} />
        <TitleBox shape={titleData} />
      </ColumnComponent>
      <ColumnComponent>
        <NameInput inputData={inputData} />
        <ButtonNext buttonData={buttonData} />
      </ColumnComponent>
      <RowText>
        {textList.map((item, index) => {
          return (
            <TextList key={index} color={item.color}>
              <TextDefault shape={item} />
            </TextList>
          );
        })}
      </RowText>
      <Share />
    </>
  );
};
export default Home;
