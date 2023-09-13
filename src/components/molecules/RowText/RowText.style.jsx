import styled from 'styled-components';
import Link from 'next/link';
import { FontWhite, FontSmallSize, BgDarkPurple, BgWhite, Center, FlexItemCenter } from '@/style/Common.style';

// ********************** 푸터 **********************
export const RowTextWrap = styled.ul`
  gap: 8px;
  ${Center}
`;
export const RowTextList = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 14px;
    ${BgWhite}
  }

  &:last-child:after {
    display: none;
  }
`;
