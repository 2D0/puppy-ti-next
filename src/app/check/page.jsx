'use client';

import React, { useEffect, useState } from 'react';
import { QuestionList } from '@/components/organisms/index';
import axios from 'axios';
import { ButtonNext } from '@/components/atoms';

const CheckPage = () => {
  const [percent, setPercent] = useState(0);
  const [buttonAble, setButtonAble] = useState(false);
  const [questions, setQuestions] = useState([]);
  const getQuestionData = async () => {
    await axios({
      url: '/questions',
      method: 'GET',
    })
      .then(response => {
        console.log(response.data);
        setQuestions(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getQuestionData();
  }, []);

  const buttonData = {
    type: 'button',
    url: '/result',
    able: buttonAble,
    event: null,
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
