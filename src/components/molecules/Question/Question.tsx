import React, { useEffect, useState } from 'react';

//스타일
import { Gray, Pink, Purple, White } from '@styles/Common.style';
import {
  QuestionBox,
  QuestionSelect,
  QuestionBoxContent,
  CheckButtons,
  CheckButton,
  QuestionBoxText,
} from '@molecules/Question/Question.style';

//이미지
import FootButton from '@icons/ico-foot.svg';

//컴포넌트
import { TextDefault } from '@atoms/index';

const CheckQuestion = ({ questionData }) => {
  return (
    <QuestionBox>
      <QuestionSelect>
        <li>
          <TextDefault textDefaultData={{ text: '아니다', color: White }} />
        </li>
        <li>
          <TextDefault textDefaultData={{ text: '그렇다', color: White }} />
        </li>
      </QuestionSelect>
      <QuestionBoxContent>
        <QuestionBoxText>{questionData.text}</QuestionBoxText>
        <CheckButtons>
          <CheckButton>
            <FootButton stroke={Pink} fill={Pink} />
          </CheckButton>
          <CheckButton>
            <FootButton stroke={Pink} fill={Pink} />
          </CheckButton>
          <CheckButton>
            <FootButton stroke={Pink} fill={Pink} />
          </CheckButton>
          <CheckButton>
            <FootButton stroke={Gray} fill={Gray} />
          </CheckButton>
          <CheckButton>
            <FootButton stroke={Purple} fill={Purple} />
          </CheckButton>
          <CheckButton>
            <FootButton stroke={Purple} fill={Purple} />
          </CheckButton>
          <CheckButton>
            <FootButton stroke={Purple} fill={Purple} />
          </CheckButton>
        </CheckButtons>
      </QuestionBoxContent>
    </QuestionBox>
  );
};
export default CheckQuestion;
