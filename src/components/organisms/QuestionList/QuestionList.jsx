import React from 'react';
import questionData from '@/app/api/Check/questions.json';

//스타일
import * as O from '@/components/organisms/QuestionList/QuestionList.style';

const QuestionList = () => {
  return (
    <O.CheckQABoxs>
      {question.map((item, itemIdx) => (
        <O.CheckQABoxList key={item.id}>
          <O.CheckQATop>
            <O.CheckQATitL>아니다</O.CheckQATitL>
            <O.CheckQATitR>그렇다</O.CheckQATitR>
          </O.CheckQATop>
          <O.CheckQACont>
            <O.CheckQATxt>{item.text}</O.CheckQATxt>
            <O.CheckQABtns>
              {questionData.scoreType.map((scoreItem, scoreIdx) => (
                <O.CheckQABtn
                  key={scoreItem.id}
                  onClick={() => {
                    checkState(item.id, scoreItem.id);
                  }}
                  type="button"
                >
                  <O.CheckFoot questionItem={item} questionIdx={questionIdx} score={score} scoreIdx={scoreIdx} scoreCount={scoreItem.score}>
                    <Foot />
                  </O.CheckFoot>
                </O.CheckQABtn>
              ))}
            </O.CheckQABtns>
          </O.CheckQACont>
        </O.CheckQABoxList>
      ))}
    </O.CheckQABoxs>
  );
};
export default QuestionList;
