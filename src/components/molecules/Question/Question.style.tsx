import styled, { css } from 'styled-components';
import {
  SizeDefaultRem,
  IconShadow,
  White,
  Purple,
  Pink,
  Center,
  SizeMediumRem,
  SizeDefaultSmallRem,
  SizeRegularRem,
  ContentsInner,
  CommonShadow,
} from '@styles/Common.style';
import device from '@styles/Device.style';

// ******************** 질문 박스 ********************
export const QuestionBox = styled.li`
  background-color: ${White};
  ${CommonShadow};
`;
export const QuestionSelect = styled.ul`
  display: grid;
  height: ${SizeMediumRem};
  grid-template-columns: repeat(2, 1fr);

  > li {
    height: inherit;
    color: ${White};
    ${Center};

    &:first-child {
      background-color: ${Pink};
    }
    &:last-child {
      background-color: ${Purple};
    }
  }
`;
export const QuestionBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem 0; //30px
  ${ContentsInner};
  padding: 1.875em 0; //30px
  background-color: ${White};
`;
export const QuestionBoxText = styled.span`
  white-space: break-spaces;
  text-align: center;
`;

//버튼 선 굵기
export const StrockeWidth = `0.25rem`;

export const CheckButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0 1rem;

  @media ${device.MaxWidthL} {
    gap: 0 0.5rem;
  }
`;
export const CheckButton = styled.button``;
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
