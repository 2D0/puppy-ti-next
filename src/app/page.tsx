'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

//커스텀 훅
import {
  useDate,
  useGetData,
  useRandomString,
  useUpdateData,
} from '@hooks/index';

//상태관리
import { useRecoilState, useSetRecoilState } from 'recoil';
import { nameAtom, testCountState, userIdState } from '@state/index';

//스타일
import { MainChar, MainForm } from '@styles/Page.style';

//컴포넌트
import {
  ColumnComponent,
  DarkPurple,
  LightPurple,
  Purple,
} from '@styles/Common.style';
import { ButtonNext, NameInput, TextSub } from '@atoms/index';
import { TitleBox } from '@molecules/index';

//이미지
import { MainImg } from '@images/character/index';

const Home = () => {
  const [nameData, setNameData] = useState<string>();
  const router = useRouter(); //react router 페이지 핸들링하는 함수
  const [buttonAble, setButtonAble] = useState<boolean>(false);
  const nameState = useSetRecoilState(nameAtom); //반려견 이름
  const setUserId = useSetRecoilState(userIdState); //반려견 이름
  const [testCount, setTestCount] = useRecoilState<number>(testCountState);

  const { fullDateValue } = useDate();
  const { primaryString } = useRandomString({ length: 18 });
  const [userId] = useState<string>(`${primaryString}-${fullDateValue}`); //유저 아이디
  const { mutate: dataHandler, isLoading } = useUpdateData();

  if (isLoading) return <div>Loading...</div>;
  // console.log('데이터', dataHandler);

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
    dataHandler({
      methodName: 'POST',
      tableName: 'result_user_list',
      updateValue: {
        id: userId,
        name: nameData,
        time: fullDateValue,
        mbti: '',
      },
      successHandler: data => {
        console.log(data);
        router.push(buttonData.url);
        setUserId(userId);
      },
      primaryKey: '',
    });
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
        <TextSub textSubData={subTextData} />
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
