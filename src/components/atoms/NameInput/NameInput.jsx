import React from 'react';

//스타일
import * as A from './NameInput.style';

const NameInput = ({ InputData }) => {
  return <A.InputBox value={InputData.value} type={InputData.type} placeholder={InputData.placeholder} />;
};
export default NameInput;
