import styled from 'styled-components';
import Link from 'next/link';
import device from '@/style/Device.style';
import { SizeLargeRem, Center, White, DarkPurple, SizeMiddleRem, SizeMediumLargeRem } from '@/style/Common.style';

// ********************** 푸터 **********************
export const FooterColor = `
  ${White}
`;
export const FooterWrap = styled.footer`
  ${Center};
  flex-direction: column;
  width: 100%;
  height: ${SizeLargeRem};
  gap: 0.5rem;
  background-color: ${DarkPurple};

  @media ${device.MaxWidthL} {
    height: ${SizeMediumLargeRem};
    gap: 0.25rem;
  }
`;
export const FooterInfo = styled.ul`
  ${Center};
  gap: 0.5rem;
`;
export const FooterInfoLink = styled(Link)`
  padding: 0.188rem 0.125rem; //3px 2px
  color: ${FooterColor};
`;
export const FooterCopy = styled.div`
  color: ${FooterColor};
`;
