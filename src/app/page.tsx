'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { UseContextData } from '@/app/ContextData';

//스타일
import { MainChar, MainForm } from '@/style/Page.style';

//컴포넌트
import { ColumnComponent, DarkPurple, LightPurple, Purple } from '@/style/Common.style';
import { ButtonNext, NameInput, TextSub } from '@/components/atoms/index';
import { TitleBox } from '@/components/molecules/index';

//이미지
import { MainImg } from '@/assets/img/Character/index';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter(); //react router 페이지 핸들링하는 함수
  const [buttonAble, setButtonAble] = useState<boolean>(false);
  const [nameData, setNameData] = useState<string>(); //반려견 이름
  const { testCount, setTestCount } = UseContextData();

  //input에 value있을 경우 버튼 활성화
  const inputEvent = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setNameData(value);
    setButtonAble(!!value);
  };

  //submit 이벤트
  const onSubmit = (event: React.SyntheticEvent<HTMLInputElement>) => {
    event.preventDefault();

    const postData = async () => {
      await axios({
        url: '/main-data',
        method: 'POST',
        data: { count: testCount },
      })
        .then(response => {
          //axios 통신 error가 났을 때 페이지 이동을 막기 위해 then에 router 기능 추가
          router.push(buttonData.url);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    };
    postData();
  };

  const countUp = () => {
    //세션 스토리지에 강아지 이름 추가
    typeof window !== 'undefined' && sessionStorage.setItem('dog-name', `${nameData}`);

    //시작하기 버튼 누르면 참여횟수 1증가
    setTestCount(testCount + 1);
  };

  //props 데이터
  const inputData = {
    name: 'input',
    type: 'text',
    placeholder: '반려견 이름을 적어주세요.',
    event: inputEvent,
  };
  const buttonData = {
    type: 'submit',
    url: '/check',
    method: 'POST',
    able: buttonAble,
    event: countUp,
    axios: true,
    content: {
      text: '시작하기',
      font: true,
    },
  };
  const subTextData = {
    text: '나의 반려견은 어떤 성향일까?',
    font: true,
    color: LightPurple,
  };
  const titleData = {
    bigSize: true,
    accent: {
      text: '퍼피',
      color: Purple,
      font: true,
    },
    last: {
      text: '티아이',
      color: DarkPurple,
      font: true,
    },
  };

  return (
    <>
      <MainChar>
        <Image src={MainImg} alt={'퍼피티아이'} />
      </MainChar>
      <ColumnComponent>
        <TextSub shape={subTextData} />
        <TitleBox shape={titleData} />
      </ColumnComponent>
      <MainForm onSubmit={onSubmit}>
        <NameInput inputData={inputData} />
        <ButtonNext buttonData={buttonData} />
      </MainForm>
    </>
  );
};
export default Home;
