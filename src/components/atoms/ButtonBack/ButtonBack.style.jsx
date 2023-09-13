import styled from 'styled-components';
import Link from 'next/link';
import {
  FontLargeSize,
  Center
} from '@/style/Common.style.jsx';

export const BackButtonAtom = styled(Link)`
  padding: 10px;
  gap: 0 10px;
  ${Center}
  ${FontLargeSize}
`;
export const BackButtonImg = styled.img`
  width: 25px;
`;