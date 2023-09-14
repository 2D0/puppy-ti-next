import styled, { css, keyframes } from 'styled-components';
import { ContentsInner, BoxCenterRow, BoxCenterCol } from '@/style/Common.style.jsx';

// **************** 상단 퍼센트 헤드 ****************
export const CheckTopInner = styled.div`
  position: relative;
  z-index: 3;
  ${ContentsInner}
`;

//애니메이션
export const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
const fadeOption = (duration, delay) => css`
  display: block;
  animation: ${FadeIn} ${duration}s ${delay}s infinite linear alternate;
`;

//폭죽 모양
export const CheckTopFirework = `
    display: none;
    width: 55%;
    height: auto;
    position: absolute;
`;
//별 모양
export const CheckTopStarShape = `
    display: none;
    width: 16%;
    height: auto;
    position: absolute;
`;
export const CheckTopStarLShape = `
    ${CheckTopStarShape}
    width: 40%;
`;
//상단 퍼센트 바
export const CheckTopBar = styled.div``;

export const CheckTopCharImg = styled.img`
  width: 66%;
  height: auto;
  bottom: 0;
  ${BoxCenterRow}
`;

//산책 캐릭터
export const CheckTopChar = styled.div`
  width: 185px;
  height: 185px;
  position: absolute;
  bottom: 50px;
  transition: all 0.5s ease;
  z-index: 1;
`;

//오른쪽 폭죽
export const CheckTopRight = styled.div`
  width: 93px;
  height: 93px;
  position: absolute;
  top: 0;
  right: 0;
`;
export const CheckTopFireGreen = styled.img`
  top: 0;
  left: 0;
  ${CheckTopFirework}
`;
export const CheckTopFireRed = styled.img`
  bottom: 0;
  right: 0;
  ${CheckTopFirework}
`;

//오른쪽 별
export const CheckTopStarR1 = styled.img`
  bottom: 18%;
  left: 0;
  ${CheckTopStarShape}
`;
export const CheckTopStarR2 = styled.img`
  bottom: 0;
  left: 21%;
  ${CheckTopStarShape}
`;
export const CheckTopStarR3 = styled.img`
  top: 10%;
  right: 20%;
  ${CheckTopStarShape}
`;
export const CheckTopStarR4 = styled.img`
  top: 27%;
  right: 0;
  ${CheckTopStarShape}
`;

//왼쪽 별
export const CheckTopLeft = styled.div`
  width: 37px;
  height: 73px;
  left: 0;
  ${BoxCenterCol}
`;
export const CheckTopStarL1 = styled.img`
  top: 0;
  right: 0;
  ${CheckTopStarLShape}
`;
export const CheckTopStarL2 = styled.img`
  left: 0;
  ${BoxCenterCol}
  ${CheckTopStarLShape}
`;
export const CheckTopStarL3 = styled.img`
  bottom: 0;
  right: 0;
  ${CheckTopStarLShape}
`;

//체크 탑
export const CheckTop = styled.article`
  width: 100%;
  max-width: 750px;
  padding-bottom: 20px;
  padding-top: 185px;
  overflow: hidden;

  ${CheckTopChar} {
    left: ${({ percent }) => percent - 28}%;
  }

  // 폭죽 별
  ${CheckTopFireGreen} {
    ${({ percent }) => percent === 100 && fadeOption(5, 0)};
  }

  ${CheckTopFireRed} {
    ${({ percent }) => percent === 100 && fadeOption(5, 2)};
  }

  ${CheckTopStarL1},
  ${CheckTopStarR1} {
    ${({ percent }) => percent === 100 && fadeOption(3, 0)};
  }

  ${CheckTopStarL2},
  ${CheckTopStarR2} {
    ${({ percent }) => percent === 100 && fadeOption(5, 3)};
  }

  ${CheckTopStarL3},
  ${CheckTopStarR3} {
    ${({ percent }) => percent === 100 && fadeOption(4, 0)};
  }

  ${CheckTopStarR4} {
    ${({ percent }) => percent === 100 && fadeOption(3, 2)};
  }
`;
