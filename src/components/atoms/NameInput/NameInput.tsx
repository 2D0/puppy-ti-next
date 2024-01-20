import React from 'react';

//스타일
import { InputBox } from './NameInput.style';

const NameInput = ({ inputData }): any => {
  return (
    <InputBox
      onChange={inputData.event}
      type={inputData.type}
      placeholder={inputData?.placeholder}
    />
  );
};
export default NameInput;
