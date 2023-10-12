import React, {useEffect, useState} from 'react';

//스타일
import {Gray, Pink, Purple, White} from '@styles/Common.style';
import {
  QuestionBox, QuestionSelect, QuestionBoxContent, CheckButtons, CheckButton, QuestionBoxText,
} from '@/components/molecules/Question/Question.style';

//이미지
import {ReactComponent as FootButton} from '@/assets/img/Icons/ico-foot.svg';

//컴포넌트
import {TextDefault} from '@atoms/index';
import {TypeTextData} from "interface";

const CheckQuestion = ({questionData}) => {

  const textLeftData:TypeTextData = {
    text: '아니다', color: White
  }
  const textRightData: TypeTextData = {
    text: '그렇다', color: White
  }
  return (<QuestionBox>
    <QuestionSelect>
      <li>
        <TextDefault textDefaultShape={textLeftData}/>
      </li>
      <li>
        <TextDefault textDefaultShape={textRightData}/>
      </li>
    </QuestionSelect>
    <QuestionBoxContent>
      <QuestionBoxText>{questionData.text}</QuestionBoxText>
      <CheckButtons>
        <CheckButton>
          <FootButton stroke={Pink} fill={Pink}/>
        </CheckButton>
        <CheckButton>
          <FootButton stroke={Pink} fill={Pink}/>
        </CheckButton>
        <CheckButton>
          <FootButton stroke={Pink} fill={Pink}/>
        </CheckButton>
        <CheckButton>
          <FootButton stroke={Gray} fill={Gray}/>
        </CheckButton>
        <CheckButton>
          <FootButton stroke={Purple} fill={Purple}/>
        </CheckButton>
        <CheckButton>
          <FootButton stroke={Purple} fill={Purple}/>
        </CheckButton>
        <CheckButton>
          <FootButton stroke={Purple} fill={Purple}/>
        </CheckButton>
      </CheckButtons>
    </QuestionBoxContent>
  </QuestionBox>);
};
export default CheckQuestion;
