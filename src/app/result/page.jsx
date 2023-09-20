'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UseContextData } from '@/app/ContextData';

const ResultPage = () => {
  const { localNameData } = UseContextData();
  const [resultData, setResultData] = useState([]);
  const [nameData, setNameData] = useState();

  useEffect(() => {
    setNameData(sessionStorage.getItem('dog-name'));
  }, [nameData]);
  return (
    <div>
      ResultPage
      {nameData}
      {resultData.map(item => {
        return (
          <div key={item.mbti}>
            {item.mbti}
            {item.result}
            {item.advice}
          </div>
        );
      })}
    </div>
  );
};
export default ResultPage;
