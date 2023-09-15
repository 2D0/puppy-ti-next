import styled from 'styled-components';
import Link from 'next/link';
import { CenterAlign, IconShadow } from '@/style/Common.style.jsx';

export const IconButtonListWrap = styled.div`
  gap: 15px;
  ${CenterAlign};
`;
export const IconButton = styled(Link)`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: relative;
  ${IconShadow}

  >img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
