import React from 'react';

//스타일
import * as A from './NameInput.style';

const NameInput = ({ onChange, InputData }) => {
  return <A.InputBox onChange={onChange} type={InputData.type} placeholder={InputData.placeholder} />;
};
export default NameInput;
