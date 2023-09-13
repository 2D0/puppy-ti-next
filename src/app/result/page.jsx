'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResultPage = () => {
  const [resultData, setResultData] = useState([]);
  const [dogName, setDogName] = useState();

  const getData = async () => {
    await axios({
      url: '/dog-name',
      method: 'GET',
    })
      .then(response => {
        setDogName(response.data.name);
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
      {dogName}
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
