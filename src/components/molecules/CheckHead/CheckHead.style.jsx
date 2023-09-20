import styled, { css, keyframes } from 'styled-components';
import {
  ContentsInner,
  PositionCenterRow,
  PositionCenterCol,
  SizeLargeRem,
  SizeMiddleRem,
  SizeRegularRem,
  SizeExtraRem,
  SizeDefaultSmallRem,
  PositionFit,
  LightPurple,
  Purple,
  White,
  Pink,
} from '@/style/Common.style.jsx';
import device from '@/style/Device.style';

// **************** 상단 퍼센트 헤드 ****************
export const CheckTopInner = styled.div`
  ${ContentsInner};
  height: ${SizeExtraRem};
  position: relative;
  z-index: 3;
  overflow-x: hidden;

  @media ${device.MaxWidthL} {
    height: ${SizeLargeRem};
  }
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

//상단 퍼센트 바
export const CheckTopBar = styled.div`
  ${ContentsInner}
`;

//산책 캐릭터
export const CheckTopChar = styled.div`
  width: ${SizeExtraRem};
  height: ${SizeExtraRem};
  position: absolute;
  transition: all 0.5s ease;
  z-index: 1;

  @media ${device.MaxWidthL} {
    width: ${SizeLargeRem};
    height: ${SizeLargeRem};
  }
`;

//폭죽들
export const Fireworks = styled.div`
  display: ${({ percent }) => (percent === 100 ? 'block' : 'none')};
  width: calc(${SizeExtraRem} + (${SizeMiddleRem} / 2));
  height: ${SizeExtraRem};
  position: absolute;
  top: 0;
  right: 0;

  @media ${device.MaxWidthL} {
    width: calc(${SizeExtraRem} + (${SizeRegularRem} / 2));
  }
`;

//왼쪽 폭죽
export const FireworkLeftShape = css`
  width: calc(${SizeMiddleRem} / 2);
  height: calc(${SizeMiddleRem} / 2);
  position: absolute;

  @media ${device.MaxWidthL} {
    width: calc(${SizeMiddleRem} / 2.5);
    height: calc(${SizeMiddleRem} / 2.5);
  }
`;
export const FireworkLeft1 = styled.div`
  ${FireworkLeftShape};
  top: 0.5rem;
  left: 0;

  > svg {
    > path {
      fill: ${White};
    }
  }

  @media ${device.MaxWidthL} {
    top: 0.5rem;
    left: 1rem;
  }
`;
export const FireworkLeft2 = styled.div`
  ${FireworkLeftShape};
  top: 0;
  left: 1rem;

  > svg {
    > path {
      fill: ${Pink};
    }
  }
  @media ${device.MaxWidthL} {
    left: 1.5rem;
  }
`;
export const FireworkLeft3 = styled.div`
  width: calc(${SizeMiddleRem} / 1.5);
  height: calc(${SizeMiddleRem} / 1.5);
  position: absolute;
  bottom: 1rem;
  left: -1rem;

  @media ${device.MaxWidthL} {
    width: calc(${SizeMiddleRem} / 1.7);
    height: calc(${SizeMiddleRem} / 1.7);
    bottom: 2.5rem;
    left: 0;
  }
`;

//오른쪽 폭죽
export const FireworksTopRight = styled.div`
  width: ${SizeMiddleRem};
  height: ${SizeMiddleRem};
  position: absolute;
  top: 0;
  right: 1rem;

  @media ${device.MaxWidthL} {
    right: 0.5rem;
  }
`;

//체크 탑
export const CheckTop = styled.article`
  width: 100%;
  max-width: 750px;
  padding: ${SizeDefaultSmallRem} 0;
  box-sizing: initial;
  overflow: hidden;
  position: relative;

  ${CheckTopChar} {
    left: ${({ percent }) => `calc(${percent}% - ${SizeExtraRem})`};

    @media ${device.MaxWidthL} {
      left: ${({ percent }) => `calc(${percent}% - ${SizeLargeRem})`};
    }
  }

  // 폭죽 별
  ${FireworksTopRight} {
    ${({ percent }) => percent === 100 && fadeOption(5, 0)};
  }
  ${FireworkLeft1} {
    ${({ percent }) => percent === 100 && fadeOption(3, 0)};
  }
  ${FireworkLeft2} {
    ${({ percent }) => percent === 100 && fadeOption(5, 3)};
  }
  ${FireworkLeft3} {
    ${({ percent }) => percent === 100 && fadeOption(3, 2)};
  }
`;
