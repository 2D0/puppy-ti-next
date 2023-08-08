import React from 'react';

//스타일
import * as A from '@/components/atoms/NextButton/NextButton.style';

const NextButton = ({buttonName, clickEvent, type, inputName}) => {
  return (
    <A.NextButton
      onClick={clickEvent}
      type={type}
      inputName={inputName}
    >
      {buttonName}
    </A.NextButton>
  );
};
export default NextButton;
