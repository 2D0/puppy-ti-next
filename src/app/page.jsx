'use client';
import React, {useState} from 'react';
import { useRouter } from 'next/navigation';

//컴포넌트
import {ShareButton, AccentText, NextButton} from '@/components/atoms/index';

const Home = () => {
  const router = useRouter(); //react router 페이지 핸들링하는 함수
  const [inputName, setInputName] = useState('');

  //강아지 이름 입력 여부에 따라 nextButton이 활성화 된다.
  const clickEvent = () => {
    inputName !== '' && router.push('/check');
  }

  return (
    <>
      <ShareButton/>
      <AccentText/>
      <NextButton buttonName={'시작하기'} clickEvent={clickEvent} inputName={inputName}/>
    </>
  );
}
export default Home
