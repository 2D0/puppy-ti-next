import React from 'react';
import { useRouter } from 'next/navigation';

//스타일
import { NextButton } from '@/components/atoms/ButtonNext/ButtonNext.style';

//컴포넌트
import { TextDefault } from '@/components/atoms';
import axios from 'axios';

const ButtonNext = ({ buttonData }) => {
  const router = useRouter(); //react router 페이지 핸들링하는 함수
  console.log(buttonData.able);
  //입력한 이름 디비에 전송
  const postData = async axiosData => {
    await axios({
      url: axiosData.url,
      method: 'POST',
      data: axiosData.data,
    })
      .then(response => {
        //axios 통신 error가 났을 때 페이지 이동을 막기 위해 then에 router 기능 추가
        router.push(buttonData.url);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const clickEvent = () => {
    //axios를 사용하지 않는 경우 router만 실행되게
    // buttonData.axiosData ? postData(buttonData.axiosData) : router.push(buttonData.url);
  };

  return (
    <NextButton type={buttonData.type} $able={buttonData.able}>
      <TextDefault shape={buttonData.content} />
    </NextButton>
  );
};
export default ButtonNext;
