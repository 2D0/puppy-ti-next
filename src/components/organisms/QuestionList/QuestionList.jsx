import React from 'react';

//스타일
import { CheckBoxListWrap, CheckBoxList } from '@/components/organisms/QuestionList/QuestionList.style';

//이미지
import { TextDefault } from '@/components/atoms';
import Question from '@/components/molecules/Question/Question';

const QuestionList = questionData => {
  return (
    <CheckBoxListWrap>
      <Question />
      {questionData.questionData.map(item => (
        <CheckBoxList key={item.id}>
          <TextDefault shape={item} />
        </CheckBoxList>
      ))}
    </CheckBoxListWrap>
  );
};
export default QuestionList;
