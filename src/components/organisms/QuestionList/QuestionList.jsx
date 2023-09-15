import React from 'react';

//스타일
import { CheckQABoxList, CheckQABoxs } from '@/components/organisms/QuestionList/QuestionList.style';

const QuestionList = questionData => {
  return (
    <CheckQABoxs>
      {questionData.questionData.map(item => (
        <CheckQABoxList key={item.id}>{item.text}</CheckQABoxList>
      ))}
    </CheckQABoxs>
  );
};
export default QuestionList;
