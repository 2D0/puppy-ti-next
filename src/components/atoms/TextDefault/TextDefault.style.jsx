import styled from 'styled-components';
import { SizeDefaultRem } from '@/style/Common.style';

export const DefaultText = styled.span`
  font-size: ${SizeDefaultRem};
  color: ${({ color }) => color};
`;
