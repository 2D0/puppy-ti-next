import styled, { css } from 'styled-components';
import { SizeDefaultRem, IconShadow, White, Purple, Pink, Center, SizeMediumRem } from '@/style/Common.style';

// ******************** 질문 박스 ********************
export const StrockeWidth = `0.25rem`;
export const QuestionQABoxs = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${SizeMediumRem} 0;
`;
export const QuestionQABoxList = styled.li``;
export const QuestionQATop = styled.ul`
  display: flex;
  height: ${SizeMediumRem};
`;
export const QuestionQATit = styled.li`
  width: 50%;
  height: inherit;
  color: ${White};
  font-size: ${SizeDefaultRem};
  ${Center};
`;
export const QuestionQATitL = styled(QuestionQATit)`
  background-color: ${Pink};
`;
export const QuestionQATitR = styled(QuestionQATit)`
  background-color: ${Purple};
`;
export const QuestionQACont = styled.div`
  flex-direction: column;
  gap: 1.875rem 0; //30px
  padding: 1.875em 0; //30px
  background-color: ${White};
  ${Center}
`;
export const QuestionQATxt = styled.span`
  width: 90%;
  white-space: break-spaces;
  text-align: center;
  font-size: ${SizeDefaultRem};
`;
export const QuestionQABtns = styled.div`
  gap: 0 ${SizeRegularRem};
  ${Center}
`;
export const QuestionQABtn = styled.button``;
export const QuestionFootShape = css`
  display: block;
  width: auto;
  height: 4.375rem;
  stroke-width: ${StrockeWidth};
  fill: transparent;

  > path {
    display: block;
    width: auto;
    height: 100%;
    fill: #9e446f;
    ${IconShadow}
  }
`;
export const QuestionFootBlank = css`
  stroke-width: ${StrockeWidth};
  fill: transparent;
`;
export const QuestionFoot = styled.span`
  svg {
    ${QuestionFootShape}
    ${({ scoreIdx }) =>
      scoreIdx === 3 &&
      css`
        height: 3.75rem; //60px
      `};

    > path {
      ${QuestionFootBlank};

      //버튼 기본 디자인
      ${({ scoreIdx }) => {
        if (scoreIdx === 3) {
          return css`
            stroke: #999;
          `;
        }
        if (scoreIdx <= 3) {
          return css`
            stroke: #7846d0;
          `;
        }
        if (scoreIdx >= 3) {
          return css`
            stroke: #9e446f;
          `;
        }
      }}

      ${({ questionItem, questionIdx, score }) => {
        /*if (questionItem.id === questionIdx) {
            for (let i = 0; questionItem.state.type !== 'center' && i <= questionItem.state.score; i++) {
                console.log(score[i]);
                if (questionItem.state.type === 'center' && score.type === 'center') {
                    console.log(i);
                    return css`
                        fill: #999;
                    `;
                } else if (
                    questionItem.state.type === 'no' &&
                    score[i].type === 'no' &&
                    questionItem.state.score === score[i].score
                ) {
                    console.log(i);
                    return css`
                        fill: #7846d0;
                    `;
                } else if (questionItem.state.type === 'yes' && score[i].type === 'yes' && score[i].score <= 3) {
                    console.log(i);
                    return css`
                        fill: #9e446f;
                    `;
                }
            }
        }*/
      }}


      ${({ questionItem, questionIdx, scoreCount, scoreIdx }) => {
        if (questionItem.id === questionIdx && questionItem.state.score === scoreCount) {
          if (questionItem.state.type === 'center' && scoreIdx === 3) {
            // console.log(item.state.type === 'center');
            return css`
              fill: #999;
            `;
          } else if (questionItem.state.type === 'no' && scoreIdx <= 3) {
            // console.log(scoreIdx);
            return css`
              fill: #7846d0;
            `;
          } else if (questionItem.state.type === 'yes' && scoreIdx >= 3) {
            // console.log(scoreIdx);
            return css`
              fill: #9e446f;
            `;
          }
        }
      }}
`;
