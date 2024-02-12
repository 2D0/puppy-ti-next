'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { nameAtom, testCountState, userIdState } from '@state/index';

//컴포넌트
import { ButtonNext } from '@atoms/index';
import { QuestionList } from '@organisms/index';
import { useRecoilValue } from 'recoil';
import { useGetData } from '@/src/hooks';

const CheckPage = () => {
  const [checkPercent, setCheckPercent] = useState<number>(10);
  const [buttonAble, setButtonAble] = useState<boolean>(false);

  const userId = useRecoilValue(userIdState);
  const { data: questions } = useGetData({ tableName: 'question_list' });

  useEffect(() => {}, []);

  const clickEvent = () => {
    console.log('click');
  };

  const buttonData = {
    type: 'button',
    url: '/result',
    able: buttonAble,
    axios: true,
    event: clickEvent,
    content: {
      text: '결과보기',
      font: true,
    },
  };
  return (
    <>
      <QuestionList questionData={questions || []} />
      <ButtonNext buttonData={buttonData} />
    </>
  );
};
export default CheckPage;
