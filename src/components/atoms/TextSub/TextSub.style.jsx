import styled from 'styled-components';
import { FontMiddleSize } from '@/style/Common.style';

export const SubText = styled.span`
  font-size: ${FontMiddleSize};
  color: ${({ color }) => color};
`;
