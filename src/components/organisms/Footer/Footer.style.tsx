import styled from 'styled-components';
import Device from '@styles/Device.style';
import {
  SizeLargeRem,
  Center,
  DarkPurple,
  SizeMediumLargeRem,
} from '@styles/Common.style';

// ********************** 푸터 **********************
export const FooterWrap = styled.footer`
  ${Center};
  flex-direction: column;
  width: 100%;
  height: ${SizeLargeRem};
  gap: 0.5rem;
  background-color: ${DarkPurple};

  @media ${Device.MaxWidthL} {
    height: ${SizeMediumLargeRem};
    gap: 0.25rem;
  }
`;
export const FooterInfo = styled.ul`
  ${Center};
  gap: 0.5rem;
`;
