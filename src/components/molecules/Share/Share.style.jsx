import styled from 'styled-components';
import Link from 'next/link';
import { BoxCenter, FlexItemCenter, IconShadow } from '@/style/Common.style.jsx';

export const ShareWrap = styled.div`
  gap: 15px;
  ${FlexItemCenter}
`;
export const ShareButtonAtom = styled(Link)`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  ${IconShadow}

  >img {
    width: 100%;
    height: 100%;
    ${BoxCenter}
  }
`;
