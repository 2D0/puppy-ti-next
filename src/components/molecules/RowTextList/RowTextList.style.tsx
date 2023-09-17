import styled, { css } from 'styled-components';
import { Center, CenterAlign, SizeSmallRem } from '@/style/Common.style';

//글자 사이 막대 추가 및 가로 정렬
export const RowTextWrap = styled.div`
  ${Center};
  width: 100%;
  gap: ${SizeSmallRem};
`;

export const TextList = styled.li`
  ${CenterAlign};
  gap: 0.5rem;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 0.875rem; //14px
    background: ${({ $color }) => $color};
  }
  &:last-child:after {
    display: none;
  }
`;
