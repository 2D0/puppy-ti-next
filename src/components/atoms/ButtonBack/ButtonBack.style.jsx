import styled from 'styled-components';
import Link from 'next/link';
import { SizeRegularRem, Center, SizeSmallRem } from '@styles/Common.style.tsx';

export const BackButtonAtom = styled(Link)`
  padding: ${SizeSmallRem};
  gap: 0 ${SizeSmallRem};
  font-size: ${SizeRegularRem};
  ${Center};
`;
export const BackButtonImg = styled.img`
  width: 1.563rem; //25px
`;
