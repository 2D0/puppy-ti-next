'use client';
import React, {useState} from 'react';
import {useRouter} from 'next/navigation';

//컴포넌트
import {AccentText, NextButton, TopBackground} from '@/components/atoms/index';
import {Share} from '@/components/molecules/index';

const Home = () => {
  const router = useRouter(); //react router 페이지 핸들링하는 함수
  const [inputName, setInputName] = useState('');

  //강아지 이름 입력 여부에 따라 nextButton이 활성화 된다.
  const clickEvent = ({gugiFont}) => {
    !inputName || router.push('/check');
  }

  return (
    <>
      <TopBackground/>
      <AccentText
        accentText={'퍼피티아이'}
        className={gugiFont.className}
      />
      <NextButton
        buttonName={'시작하기'}
        clickEvent={clickEvent}
        inputName={inputName}
      />
      <Share/>
    </>
  );
}
export default Home
