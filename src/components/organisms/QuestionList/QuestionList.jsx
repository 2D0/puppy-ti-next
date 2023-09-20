import React from 'react';

//스타일
import { CheckBoxListWrap, CheckBoxList, CheckButton } from '@/components/organisms/QuestionList/QuestionList.style';
import { Gray, Pink, Purple } from '@/style/Common.style';

//이미지
import { ReactComponent as FootButton } from '@/assets/img/Icons/ico-foot.svg';
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
