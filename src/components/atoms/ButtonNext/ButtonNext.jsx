import React from 'react';
import { useRouter } from 'next/navigation';

//스타일
import { NextButton } from '@/components/atoms/ButtonNext/ButtonNext.style';

//컴포넌트
import { TextDefault } from '@/components/atoms';

const ButtonNext = ({ buttonData }) => {
  const router = useRouter(); //react router 페이지 핸들링하는 함수

  const clickEvent = () => {
    //axios를 사용하지 않는 경우 router만 실행되게
    !buttonData.axios && router.push(buttonData.url);
  };

  return (
    <NextButton
      onClick={() => {
        clickEvent();
        buttonData.event();
      }}
      type={buttonData.type}
      $able={buttonData.able}
    >
      <TextDefault shape={buttonData.content} />
    </NextButton>
  );
};
export default ButtonNext;
