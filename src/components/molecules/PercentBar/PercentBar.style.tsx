import styled, { css } from 'styled-components';
import {
  White,
  LightPurple,
  CommonShadow,
  PositionFit,
  SizeSmallRem,
  SizeRegularRem,
  SizeDefaultSmallRem,
  SizeMediumRem,
} from '@styles/Common.style.tsx';

// ********************* 퍼센트 바 ********************
export const PercentBarWrap = styled.div``;
export const PercentBarBox = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: ${White};
  ${({ $shape }) =>
    $shape.height
      ? css`
          height: ${SizeMediumRem};
          border-radius: ${SizeSmallRem};
        `
      : css`
          height: ${SizeDefaultSmallRem};
          border-radius: 0.25rem; //4px
        `};
  ${({ $shape }) => $shape.percent !== 100 && CommonShadow}
`;
export const PercentBarFill = styled.div`
  ${PositionFit};
  width: ${({ $percent }) => $percent}%;
  height: 100%;
  transition: all 1s ease;
  background-color: ${LightPurple};
`;
