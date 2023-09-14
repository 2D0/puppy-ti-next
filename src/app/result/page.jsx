'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResultPage = () => {
  const [resultData, setResultData] = useState([]);
  const [nameData, setNameData] = useState();

  const getData = async () => {
    await axios({
      url: '/dog-name',
      method: 'GET',
    })
      .then(response => {
        setNameData(response.data.name);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
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
