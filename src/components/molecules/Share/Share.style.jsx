import styled from 'styled-components';
import Link from 'next/link';
import { Center, CenterAlign, IconShadow } from '@/style/Common.style.jsx';

export const ShareTit = styled.div`
  gap: 0.375em; //6px
  ${CenterAlign}

  >img {
    width: 1.25rem; //20px
    height: 1.25rem; //20px
  }
`;
