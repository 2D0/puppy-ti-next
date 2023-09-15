import styled from 'styled-components';
import Link from 'next/link';
import { SizeLargeRem, Center, White, DarkPurple } from '@/style/Common.style';

// ********************** 푸터 **********************
export const FooterColor = `
  ${White}
`;
export const FooterWrap = styled.footer`
  ${Center};
  flex-direction: column;
  width: 100%;
  height: ${SizeLargeRem};
  background-color: ${DarkPurple};
`;
export const FooterInfo = styled.ul`
  ${Center};
  gap: 8px;

  > li {
    &:after {
      background: ${FooterColor};
    }
  }
`;
export const FooterInfoLink = styled(Link)`
  padding: 0.188rem 0.125rem; //3px 2px
  color: ${FooterColor};
`;
export const FooterCopy = styled.div`
  color: ${FooterColor};
`;
