import styled from 'styled-components';
import {Link} from 'react-router-dom';

// ********************** 푸터 **********************
export const FooterTxt = `
    ${FontWhite}
    ${FontSmallSize}
`;
export const Footer = styled.footer`
  flex-direction: column;
  width: 100%;
  height: 95px;
  position: relative;
  z-index: 3;
  ${flexCenter}
  ${BgDarkPurple}
`;
export const FooterInfo = styled.ul`
  gap: 8px;
  ${flexCenter}
`;
export const FooterInfoList = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 14px;
    ${BgWhite}
  }

  &:last-child:after {
    display: none;
  }
`;
export const FooterInfoLink = styled(Link)`
  padding: 3px 2px;
  ${FooterTxt}
`;
export const FooterCopy = styled.div`
  ${FooterTxt}
`;
