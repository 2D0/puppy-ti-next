import styled, {css} from 'styled-components';
import {
  FontWhite,
  BgWhite,
  BgPink,
  BgPurple,
  FontMediumSize,
  Center,
  IconShadow
} from '@/style/Common.style';

// ******************** 질문 박스 ********************
export const CheckQABoxs = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px 0;
`;
export const CheckQABoxList = styled.li``;
export const CheckQATop = styled.ul`
  display: flex;
  height: 40px;
`;
export const CheckQATit = styled.li`
  width: 50%;
  height: inherit;
  ${Center}
  ${FontMediumSize}
  ${FontWhite}
`;
export const CheckQATitL = styled(CheckQATit)`
  ${BgPink}
`;
export const CheckQATitR = styled(CheckQATit)`
  ${BgPurple}
`;
export const CheckQACont = styled.div`
  flex-direction: column;
  gap: 30px 0;
  padding: 30px 0;
  ${Center}
  ${BgWhite}
`;
export const CheckQATxt = styled.span`
  width: 90%;
  white-space: break-spaces;
  text-align: center;
  ${FontMediumSize}
`;
export const CheckQABtns = styled.div`
  gap: 0 25px;
  ${Center}
`;
export const CheckQABtn = styled.button``;
export const CheckFootShape = `
    display: block;
    width: auto;
    height: 70px;
    stroke-width: 4px;
    fill: transparent;

    > path {
        display: block;
        width: auto;
        height: 100%;
        fill: #9e446f;
        ${IconShadow}
    }
`;
export const CheckFootBlank = `
    stroke-width: 4px;
    fill: transparent;
`;
export const CheckFoot = styled.span`
  svg {
    ${CheckFootShape}
    ${({scoreIdx}) =>
      scoreIdx === 3 &&
      css`
        height: 60px;
      `};

    > path {
      ${CheckFootBlank};

      //버튼 기본 디자인
      ${({scoreIdx}) => {
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

      ${({questionItem, questionIdx, score}) => {
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


      ${({questionItem, questionIdx, scoreCount, scoreIdx}) => {
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
