'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

//상태관리
import { useRecoilState, useSetRecoilState } from 'recoil';
import { nameAtom, testCountState } from '@/app/state';

//스타일
import { MainChar, MainForm } from '@styles/Page.style';

//컴포넌트
import {
  ColumnComponent,
  DarkPurple,
  LightPurple,
  Purple,
  SizeExtraRem,
} from '@styles/Common.style';
import { ButtonNext, NameInput, TextDefault } from '@atoms/index';
import { TitleBox } from '@molecules/index';

//이미지
import { MainImg } from '@/assets/img/Character/index';

const Home = () => {
  const [nameData, setNameData] = useState<string>();
  const router = useRouter(); //react router 페이지 핸들링하는 함수
  const [buttonAble, setButtonAble] = useState<boolean>(false);
  const nameState = useSetRecoilState(nameAtom); //반려견 이름
  const [testCount, setTestCount] = useRecoilState<number>(testCountState);

  //input에 value있을 경우 버튼 활성화
  const inputEvent = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setNameData(value);
    setButtonAble(!!value);
  };

  //submit 이벤트
  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const postData = async (): Promise<void> => {
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
    // typeof window !== 'undefined' && sessionStorage.setItem('dog-name', `${nameData}`);
    nameState(nameData);

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
    able: buttonAble,
    event: countUp,
    axios: true,
    method: 'POST',
    url: '/check',
    content: {
      text: '시작하기',
      font: 'gugi',
    },
  };
  const subTextData = {
    text: '나의 반려견은 어떤 성향일까?',
    size: '2.25rem',
    family: 'gugi',
    color: LightPurple,
  };
  const commonTextData = {
    family: 'gugi',
    size: SizeExtraRem,
  };
  const titleData = {
    accent: {
      ...commonTextData,
      text: '퍼피',
      color: Purple,
    },
    last: {
      ...commonTextData,
      text: '티아이',
      color: DarkPurple,
    },
  };

  return (
    <>
      <MainChar>
        <Image src={MainImg} alt={'퍼피티아이'} />
      </MainChar>
      <ColumnComponent>
        <TextDefault textDefaultData={subTextData} />
        <TitleBox titleBoxData={titleData} />
      </ColumnComponent>
      <MainForm onSubmit={onSubmit}>
        <NameInput inputData={inputData} />
        <ButtonNext buttonData={buttonData} />
      </MainForm>
    </>
  );
};
export default Home;
