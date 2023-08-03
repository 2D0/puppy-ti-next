import styled from 'styled-components';
import Link from 'next/link';
import {
  IconShadow,
  BoxCenter
} from '@/style/Common.style.jsx';

export const ShareButtonAtom = styled(Link)`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  ${IconShadow}
  
  >img{
    ${BoxCenter}
  }
`;