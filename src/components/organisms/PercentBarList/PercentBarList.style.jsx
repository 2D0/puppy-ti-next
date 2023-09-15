import styled, { css } from 'styled-components';
import { SizeDefaultRem, DarkPurple, Gray, CenterAlign, SizeSmallRem, SizeMediumRem } from '@/style/Common.style';

export const ResultPercentCont = styled.div``;
export const ResultPercentBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${SizeMediumRem};
`;
export const ResultPercentList = styled.li`
  ${({ percent }) =>
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
`;
export const ResultPercentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${SizeSmallRem};
  position: relative;
  z-index: 2;
`;
export const ResultPercentNames = styled.div`
  ${CenterAlign};
  gap: 0 ${SizeSmallRem};
  
  > span {
    ${({ resultType }) => (resultType ? DarkPurple : Gray)}
`;
export const ResultPercentName = styled.span`
  font-size: ${SizeDefaultRem};
  font-weight: 500;
`;
export const ResultPercentNum = styled.span``;
