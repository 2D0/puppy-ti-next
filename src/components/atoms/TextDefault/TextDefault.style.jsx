import styled from 'styled-components';
import { FontDefaultSize } from '@/style/Common.style';

export const DefaultText = styled.span`
  font-size: ${FontDefaultSize};
  color: ${({ color }) => color};
`;
