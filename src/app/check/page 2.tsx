'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

//컴포넌트
import { ButtonNext } from '@atoms/index';
import { QuestionList } from '@organisms/index';

const CheckPage = () => {
  const [checkPercent, setCheckPercent] = useState<number>(10);
  const [buttonAble, setButtonAble] = useState<boolean>(false);
  const [questions, setQuestions] = useState<object>([]);


  const getQuestionData = async () => {
    await axios({
      url: '/questions',
      method: 'GET',
    })
      .then(response => {
        setQuestions(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getQuestionData();
    console.log(sessionStorage.getItem('dog-name'), '0');
  }, []);

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
      <QuestionList questionData={questions} />
      <ButtonNext buttonData={buttonData} />
    </>
  );
};
export default CheckPage;
