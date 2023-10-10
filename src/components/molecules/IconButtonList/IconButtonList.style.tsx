import styled from 'styled-components';
import Link from 'next/link';
import { CenterAlign, IconShadow, SizeMediumRem } from '@styles/Common.style.js';

export const IconButtonListWrap = styled.div`
  gap: 0.938rem; //15px
  ${CenterAlign};
`;
export const IconButton = styled(Link)`
  display: block;
  width: ${SizeMediumRem};
  height: ${SizeMediumRem};
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  ${IconShadow}
`;
