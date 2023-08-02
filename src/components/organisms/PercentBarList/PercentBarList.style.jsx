import styled, {css} from 'styled-components';
import {
  FontSmallSize,
  FontMediumSize,
  defaultContMargin,
  FontDarkPurple,
  flexItemCenter,
  FontGray,
  PercentBarFill,
} from '@/style/Common.style';

export const ResultPercentCont = styled.div`
  ${defaultContMargin}
`;
export const ResultPercentBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  ${defaultContMargin}
`;
export const ResultPercentList = styled.li`
  ${PercentBarFill} {
    ${({percent}) =>
      percent >= 100 - percent
        ? css`
          left: 0;
          right: initial;
          width: ${percent}%;
        `
        : css`
          left: initial;
          right: 0;
          width: ${100 - percent}%;
        `};
  }
`;
export const ResultPercentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  position: relative;
  z-index: 2;
`;
export const ResultPercentNames = styled.div`
  gap: 0 10px;

  ${flexItemCenter}
  > span {
    ${FontGray}

    ${({resultType}) =>
      resultType &&
      css`
        ${FontDarkPurple}
      `}
`;
export const ResultPercentName = styled.span`
  font-weight: 500;
  ${FontMediumSize}
`;
export const ResultPercentNum = styled.span`
  ${FontSmallSize}
`;