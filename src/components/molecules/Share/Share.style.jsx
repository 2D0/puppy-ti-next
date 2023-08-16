import styled from 'styled-components';
import Link from 'next/link';
import { Center, FlexItemCenter, IconShadow } from '@/style/Common.style.jsx';

export const ShareWrap = styled.div`
  flex-direction: column;
  gap: 10px 0;
  ${Center}
`;
export const ShareTit = styled.div`
  gap: 5px;
  ${FlexItemCenter}

  >img {
    width: 20px;
    height: 20px;
  }
`;
export const ShareButtons = styled.div`
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
  }
`;
