'use client';
import React, { useEffect, useState } from 'react';

const ResultPage = () => {
  const [resultData, setResultData] = useState([]);
  const getData = async () => {
    const { data } = await (await fetch('./api/result')).json();
    setResultData(data);
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      ResultPage
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
