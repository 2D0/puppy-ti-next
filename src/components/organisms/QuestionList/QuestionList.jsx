import React from 'react';

//스타일
import { CheckBoxListWrap, CheckBoxList } from './QuestionList.style';

//이미지
import { TextDefault } from '@atoms/index';

//컴포넌트
import { Question } from '@molecules/index';

const QuestionList = questionData => {
  return (
    <CheckBoxListWrap>
      {questionData.questionData.map(item => (
        <Question key={item.id} questionData={item} />
      ))}
    </CheckBoxListWrap>
  );
};
export default QuestionList;
