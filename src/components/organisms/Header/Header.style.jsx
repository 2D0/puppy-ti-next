import styled, { css } from 'styled-components';
import { CenterAlign, PositionCenter, SizeLargeRem, Black, WhitePurple, LightPurple } from '@/style/Common.style';
import device from '@/style/Device.style';

// ********************** 헤더 **********************
export const HeaderInner = styled.div`
  ${CenterAlign};
  justify-content: flex-end;
  width: calc(100% - 30px);
  height: ${SizeLargeRem};
  margin: 0 auto;
  position: relative;

  @media ${device.MaxWidthFull} {
    height: 3.75rem; //60px
  }
`;
export const HeaderLogo = styled.h1`
  ${PositionCenter};
  width: auto;
  height: 60%;
`;
export const HeaderLogoImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
export const HeaderCont = styled.header`
  width: 100%;
  max-width: 750px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  z-index: 998;

  ${({ scrollHeader }) =>
    scrollHeader &&
    css`
      box-shadow: 0 0 7px #dcd5e8;
    `};

  ${({ location, percent }) => {
    switch (location) {
      case '/check':
        return css`
          background-color: ${percent === 100 ? Black : WhitePurple};
        `;
      case '/result':
        return css`
          background-color: ${WhitePurple};
        `;
      default:
        return css`
          background-color: ${LightPurple};
        `;
    }
  }};
`;
