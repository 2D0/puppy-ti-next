'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

//스타일
import { MainChar } from '@/style/Page.style';

//컴포넌트
import { NextButton, WaveBackground, NameInput } from '@/components/atoms/index';
import { Share, TitleBox } from '@/components/molecules/index';

//이미지
import { MainImg } from '@/assets/img/Character/index';
import SvgComponent from '@/assets/img/Icons/SvgComponent';

const Home = () => {
  const router = useRouter(); //react router 페이지 핸들링하는 함수
  const [dogName, setDogName] = useState('');

  //강아지 이름 입력 여부에 따라 nextButton이 활성화 된다.
  const clickEvent = () => {
    dogName !== '' && router.push('/check');
  };

  //input에 글자가 1개 이상 입력될 경우 버튼 활성화
  const nameChange = e => {
    const { value } = e.target;
    dogName !== '' && setDogName(value);
    setDogName(value);
  };

  const InputData = {
    name: 'input',
    type: 'text',
    placeholder: '반려견 이름을 적어주세요.',
  };

  return (
    <>
      <WaveBackground />
      <MainChar>
        <Image src={MainImg} />
      </MainChar>
      <TitleBox accentText={'퍼피'} lastText={'티아이'} />
      <NameInput onChange={nameChange} InputData={InputData} />
      <NextButton buttonName={'시작하기'} clickEvent={clickEvent} buttonHandler={dogName} />
      <Share />
    </>
  );
};
export default Home;
