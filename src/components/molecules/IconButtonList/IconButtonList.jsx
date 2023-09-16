import styled from 'styled-components';
import Link from 'next/link';
import { CenterAlign, IconShadow, SizeMediumRem } from '@/style/Common.style.jsx';

export const IconButtonListWrap = styled.div`
  gap: 0.938rem; //15px
  ${CenterAlign};
`;
export const IconButton = styled(Link)`
  display: block;
  width: ${SizeMediumRem};
  height: ${SizeMediumRem};
  border-radius: 50%;
  position: relative;
  ${IconShadow}

  >img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
