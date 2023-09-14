import styled from 'styled-components';
import { FontExBigSize, FontExtraSize } from '@/style/Common.style';

export const TitleWrap = styled.div`
  color: ${({ color }) => color};
  > span {
    font-size: ${({ size }) => (size ? FontExBigSize : FontExtraSize)};
  }
`;

export const TextAccent = styled.span`
  color: ${({ color }) => color};
`;
