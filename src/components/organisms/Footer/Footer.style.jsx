import styled from 'styled-components';
import Link from 'next/link';
import { FontWhite, BgDarkPurple, BgWhite, Center, FontDefaultSize, White } from '@/style/Common.style';

// ********************** 푸터 **********************
export const FooterColor = `
  ${White}
`;
export const FooterWrap = styled.footer`
  flex-direction: column;
  width: 100%;
  height: 85px;
  position: relative;
  z-index: 3;
  ${Center}
  ${BgDarkPurple}
`;
export const FooterInfo = styled.ul`
  gap: 8px;
  ${Center}

  >li {
    &:after {
      background: ${FooterColor};
    }
  }
`;
export const FooterInfoLink = styled(Link)`
  padding: 3px 2px;
  color: ${FooterColor};
`;
export const FooterCopy = styled.div`
  color: ${FooterColor};
`;
