'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import axios from 'axios';

//스타일
import { MainChar } from '@/style/Page.style';

//컴포넌트
import { ButtonNext, BackgroundWave, NameInput, TextDefault, TextSub } from '@/components/atoms/index';
import { Share, TitleBox } from '@/components/molecules/index';

//이미지
import { MainImg } from '@/assets/img/Character/index';
import SvgComponent from '@/assets/img/Icons/SvgComponent';
import { ColumnComponent, RowText } from '@/style/Common.style';

const Home = () => {
  const router = useRouter(); //react router 페이지 핸들링하는 함수
  const [dogName, setDogName] = useState(null);
  const [testCount, setTestCount] = useState(null);

  //input에 글자가 1개 이상 입력될 경우 버튼 활성화
  const nameChange = e => {
    const { value } = e.target;
    setDogName(value);
  };

  const InputData = {
    name: 'input',
    type: 'text',
    placeholder: '반려견 이름을 적어주세요.',
  };

  const dataArray = ['참여횟수', `${testCount}`];

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

  const postData = async () => {
    await axios({
      url: '/dog-name',
      method: 'POST',
      data: { name: `${dogName}` },
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
  });

  //강아지 이름 입력 여부에 따라 nextButton이 활성화 된다.
  const clickEvent = () => {
    dogName && router.push('/check');
    postData();
  };
  return (
    <>
      <BackgroundWave />
      <MainChar>
        <Image src={MainImg} />
      </MainChar>
      <ColumnComponent>
        <TextSub data={'나의 반려견은 어떤 성향일까?'} font={true} />
        <TitleBox accentText={'퍼피'} lastText={'티아이'} />
      </ColumnComponent>
      <ColumnComponent>
        <NameInput onChange={nameChange} InputData={InputData} />
        <ButtonNext buttonName={'시작하기'} clickEvent={clickEvent} buttonHandler={dogName} />
      </ColumnComponent>
      <RowText>
        <TextDefault data={'참여 횟수'} />|<TextDefault data={testCount} />
      </RowText>
      <Share />
    </>
  );
};
export default Home;
