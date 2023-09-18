import React from 'react';

//스타일
import { CheckBoxListWrap, CheckBoxList, CheckButton } from '@/components/organisms/QuestionList/QuestionList.style';
import { Gray, Pink, Purple } from '@/style/Common.style';

//이미지
import { ReactComponent as FootButton } from '@/assets/img/Icons/ico-foot.svg';
import { TextDefault } from '@/components/atoms';

const QuestionList = questionData => {
  return (
    <CheckBoxListWrap>
      {questionData.questionData.map(item => (
        <CheckBoxList key={item.id}>
          <TextDefault shape={item} />
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
        </CheckBoxList>
      ))}
    </CheckBoxListWrap>
  );
};
export default QuestionList;
