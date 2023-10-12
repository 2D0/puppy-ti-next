import styled from 'styled-components';
import { Center, CenterAlign, SizeSmallRem } from '@styles/Common.style';
import { percentBarData, TypeTextData } from '../../../../interface';

//글자 사이 막대 추가 및 가로 정렬
export const RowTextWrap = styled.div`
  ${Center};
  width: 100%;
  gap: ${SizeSmallRem};
`;

export const TextList = styled.li<{ $textListData: TypeTextData }>`
  ${CenterAlign};
  gap: 0.5rem;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 0.875rem; //14px
    background: ${({ $textListData }) => $textListData.color};
  }
  &:last-child:after {
    display: none;
  }
`;
