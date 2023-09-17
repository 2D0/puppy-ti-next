import styled, { css } from 'styled-components';
import device from '@/style/Device.style';
import { CenterAlign, PositionCenter, SizeLargeRem, Black, WhitePurple, LightPurple, SizeMiddleRem, White } from '@/style/Common.style';
import { TypeHeaderData } from '@/app/TypeData';

// ********************** 헤더 **********************
export const HeaderInner = styled.div`
  ${CenterAlign};
  justify-content: flex-end;
  width: calc(100% - 30px);
  height: ${SizeLargeRem};
  margin: 0 auto;
  position: relative;

  @media ${device.MaxWidthL} {
    height: ${SizeMiddleRem};
  }
`;
export const HeaderLogo = styled.h1`
  ${PositionCenter};
  width: auto;
  height: 60%;

  > a {
    > svg {
      > path {
        fill: ${White};
      }
    }
  }
`;
export const HeaderLogoImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
export const HeaderCont = styled.header<{ $headerData: TypeHeaderData }>`
  width: 100%;
  max-width: 750px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  z-index: 998;

  ${({ $headerData }) => {
    $headerData.scroll &&
      css`
        box-shadow: 0 0 7px #dcd5e8;
      `;

    switch ($headerData.pathName) {
      case '/check':
        return css`
          background-color: ${$headerData.percent === 100 ? Black : WhitePurple};
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
