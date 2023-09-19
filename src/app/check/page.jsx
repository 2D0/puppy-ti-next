'use client';

import React, { useEffect, useState } from 'react';
import { QuestionList } from '@/components/organisms/index';
import axios from 'axios';
import { ButtonNext } from '@/components/atoms';
import { UseContextData } from '@/app/ContextData';

const CheckPage = () => {
  const { percent } = UseContextData();
  const [buttonAble, setButtonAble] = useState(false);
  const [questions, setQuestions] = useState([]);

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
