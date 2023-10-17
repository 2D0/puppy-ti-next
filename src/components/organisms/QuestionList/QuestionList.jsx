import React from 'react';

//스타일
import {
  CheckBoxListWrap,
  CheckBoxList,
} from '@/components/organisms/QuestionList/QuestionList.style';

//이미지
import { TextDefault } from '@atoms/index';
import Question from '@molecules/Question/Question';

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
