import React from 'react';

//스타일
import * as A from '@/components/atoms/ButtonNext/ButtonNext.style';
import { TextDefault } from '@/components/atoms';

const ButtonNext = ({ buttonName, clickEvent, type, buttonHandler }) => {
  return (
    <A.NextButton onClick={clickEvent} type={type} buttonHandler={buttonHandler}>
      <TextDefault data={buttonName} font={true} />
    </A.NextButton>
  );
};
export default ButtonNext;
