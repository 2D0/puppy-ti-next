import React from 'react';

//스타일
import * as A from '@/components/atoms/NextButton/NextButton.style';

const NextButton = ({ buttonName, clickEvent, type, buttonHandler }) => {
  return (
    <A.NextButton onClick={clickEvent} type={type} buttonHandler={buttonHandler}>
      {buttonName}
    </A.NextButton>
  );
};
export default NextButton;
