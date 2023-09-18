import React, { useEffect, useState } from 'react';
import questionData from '@/app/api/Check/questions.json';
import { ReactComponent as Foot } from '@/assets/img/icons/ico-foot.svg';

//스타일
import * as M from '@/components/molecules/Question/Question.style';

const CheckQuestion = ({
  setPercent,
  setPercentEnergy,
  setPercentInformation,
  setPercentIDecisions,
  setPercentLifestyle,
  setScoreI,
  setScoreE,
  setScoreS,
  setScoreN,
  setScoreT,
  setScoreF,
  setScoreJ,
  setScoreP,
}) => {
  const [checkPercent, setCheckPercent] = useState(null); //문항 체크 진도율
  const [question, setQuestion] = useState(questionData.question); //질문 데이터
  const [score, setScore] = useState(questionData.scoreType);
  const [questionIdx, setQuestionIdx] = useState();

  let checkCount = 0; //선택한 문항 개수
  let mbtiCountI = 0; //I & E 개수
  let mbtiCountE = 0; //I & E 개수
  let mbtiCountS = 0; //S & N 개수
  let mbtiCountN = 0; //S & N 개수
  let mbtiCountT = 0; //T & F 개수
  let mbtiCountF = 0; //T & F 개수
  let mbtiCountJ = 0; //J & P 개수
  let mbtiCountP = 0; //J & P 개수

  //현재 선택한 문항의 state 값 변경
  const checkState = (itemIdx, scoreId) => {
    //각 문항 속 점수 클릭 시 새로운 객체를 만들어 점수 데이터 변경
    setQuestion(
      question.map((item, itemId) => {
        if (itemIdx === itemId) {
          return {
            ...item,
            state: {
              type: questionData.scoreType[scoreId].type,
              score: questionData.scoreType[scoreId].score,
            },
          };
        } else {
          return item;
        }
      }),
    );
    setScore(
      score.map(item => {
        return { ...item };
      }),
    );
    setQuestionIdx(itemIdx);
  };

  //선택한 문항의 점수가 null이 아닐 경우 checkCount 체크한 개수만큼 증가
  const questionFilterScore = item => {
    if (item.state.score !== null) {
      checkCount++;
    }
  };

  //MBTI 종류당 총 합계 점수
  const totalScoreHandle = totalScore => {
    if (Array.isArray(totalScore)) {
      totalScore.map(item => {
        switch (item.mbti) {
          case 'I':
            switch (item.state.type) {
              case 'yes':
                return (mbtiCountI = mbtiCountI += item.state.score);
              case 'center':
                return (mbtiCountI = mbtiCountI += scoreLength);
              case 'no':
                return (mbtiCountE = mbtiCountE += item.state.score);
              default:
                return;
            }
          case 'E':
            switch (item.state.type) {
              case 'yes':
                return (mbtiCountE = mbtiCountE += item.state.score);
              case 'center':
                return (mbtiCountE = mbtiCountE += scoreLength);
              case 'no':
                return (mbtiCountI = mbtiCountI += item.state.score);
              default:
                return;
            }
          case 'S':
            switch (item.state.type) {
              case 'yes':
                return (mbtiCountS = mbtiCountS += item.state.score);
              case 'center':
                return (mbtiCountS = mbtiCountS += scoreLength);
              case 'no':
                return (mbtiCountN = mbtiCountN += item.state.score);
              default:
                return;
            }
          case 'N':
            switch (item.state.type) {
              case 'yes':
                return (mbtiCountN = mbtiCountN += item.state.score);
              case 'center':
                return (mbtiCountN = mbtiCountN += scoreLength);
              case 'no':
                return (mbtiCountS = mbtiCountS += item.state.score);
              default:
                return;
            }
          case 'T':
            switch (item.state.type) {
              case 'yes':
                return (mbtiCountT = mbtiCountT += item.state.score);
              case 'center':
                return (mbtiCountT = mbtiCountT += scoreLength);
              case 'no':
                return (mbtiCountF = mbtiCountF += item.state.score);
              default:
                return;
            }
          case 'F':
            switch (item.state.type) {
              case 'yes':
                return (mbtiCountF = mbtiCountF += item.state.score);
              case 'center':
                return (mbtiCountF = mbtiCountF += scoreLength);
              case 'no':
                return (mbtiCountT = mbtiCountT += item.state.score);
              default:
                return;
            }
          case 'J':
            switch (item.state.type) {
              case 'yes':
                return (mbtiCountJ = mbtiCountJ += item.state.score);
              case 'center':
                return (mbtiCountJ = mbtiCountJ += scoreLength);
              case 'no':
                return (mbtiCountP = mbtiCountP += item.state.score);
              default:
                return;
            }
          case 'P':
            switch (item.state.type) {
              case 'yes':
                return (mbtiCountP = mbtiCountP += item.state.score);
              case 'center':
                return (mbtiCountP = mbtiCountP += scoreLength);
              case 'no':
                return (mbtiCountJ = mbtiCountJ += item.state.score);
              default:
                return;
            }
          default:
            return;
        }
      });
    }
  };

  const scoreLength = (score.length - 1) / 2;
  const totalLength = question.length / 4;
  const questionOnePoint = 100 / question.length; //문항 1개의 퍼센트
  const filterScore = question.filter(questionFilterScore); //선택한 문항만 추출

  //배경 색상 변경 감지
  useEffect(() => {
    setPercent(checkPercent);
  }, [checkPercent]);

  //체크 퍼센트 구하기 (문항 1개 점수 × 선택한 개수)
  useEffect(() => {
    setCheckPercent(questionOnePoint * checkCount);
  }, [checkCount]);

  //mbti당 총 점수 구하기
  useEffect(() => {
    totalScoreHandle(question);
  }, [question]);

  //체크 퍼센트 구하기 (문항 1개 점수 × 선택한 개수)
  const onePoint = 100 / totalLength / scoreLength;

  //MBTI 퍼센트 state 변경
  useEffect(() => {
    setPercent();
    setPercentEnergy(Math.round(onePoint * mbtiCountI));
    setPercentInformation(Math.round(onePoint * mbtiCountS));
    setPercentIDecisions(Math.round(onePoint * mbtiCountT));
    setPercentLifestyle(Math.round(onePoint * mbtiCountJ));
  }, [question]);

  return (
    <M.QuestionQABoxs>
      {question.map((item, itemIdx) => (
        <M.QuestionQABoxList key={item.id}>
          <M.QuestionQATop>
            <M.QuestionQATitL>아니다</M.QuestionQATitL>
            <M.QuestionQATitR>그렇다</M.QuestionQATitR>
          </M.QuestionQATop>
          <M.QuestionQACont>
            <M.QuestionQATxt>{item.text}</M.QuestionQATxt>
            <M.QuestionQABtns>
              {questionData.scoreType.map((scoreItem, scoreIdx) => (
                <M.QuestionQABtn
                  key={scoreItem.id}
                  onClick={() => {
                    checkState(item.id, scoreItem.id);
                  }}
                  type="button"
                >
                  <M.QuestionFoot
                    questionItem={item}
                    questionIdx={questionIdx}
                    score={score}
                    scoreIdx={scoreIdx}
                    scoreCount={scoreItem.score}
                  >
                    <Foot />
                  </M.QuestionFoot>
                </M.QuestionQABtn>
              ))}
            </M.QuestionQABtns>
          </M.QuestionQACont>
        </M.QuestionQABoxList>
      ))}
    </M.QuestionQABoxs>
  );
};
export default CheckQuestion;
