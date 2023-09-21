import React, { useEffect, useState } from 'react';

//스타일
import { Gray, Pink, Purple, White } from '@/style/Common.style';
import {
  QuestionBox,
  QuestionSelect,
  QuestionBoxContent,
  CheckButtons,
  CheckButton,
  QuestionBoxText,
} from '@/components/molecules/Question/Question.style';

//이미지
import { ReactComponent as FootButton } from '@/assets/img/Icons/ico-foot.svg';

//컴포넌트
import { TextDefault } from '@/components/atoms';

const CheckQuestion = () => {
  return (
    <QuestionBox>
      <QuestionSelect>
        <li>
          <TextDefault shape={{ text: '아니다', color: White }} />
        </li>
        <li>
          <TextDefault shape={{ text: '그렇다', color: White }} />
        </li>
      </QuestionSelect>
      <QuestionBoxContent>
        <QuestionBoxText>질문</QuestionBoxText>
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
