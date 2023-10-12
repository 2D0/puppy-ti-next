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
} from '@styles/Common.style';
import { percentBarData } from '../../../../interface';

// ********************* 퍼센트 바 ********************
export const PercentBarWrap = styled.div``;
export const PercentBarBox = styled.div<{ $percentBarData: percentBarData }>`
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: ${White};
  ${({ $percentBarData }) =>
    $percentBarData.height
      ? css`
          height: ${SizeMediumRem};
          border-radius: ${SizeSmallRem};
        `
      : css`
          height: ${SizeDefaultSmallRem};
          border-radius: 0.25rem; //4px
        `};
  ${({ $percentBarData }) => $percentBarData.percent !== 100 && CommonShadow}
`;
export const PercentBarFill = styled.div<{ $percentBarData: percentBarData }>`
  ${PositionFit};
  width: ${({ $percentBarData }) => $percentBarData.percent}%;
  height: 100%;
  transition: all 1s ease;
  background-color: ${LightPurple};
`;
