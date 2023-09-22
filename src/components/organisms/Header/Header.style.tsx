import styled from 'styled-components';
import device from '@/style/Device.style';
import { TypeHeaderData } from '@/app/TypeData';
import {
  CenterAlign,
  PositionCenter,
  SizeLargeRem,
  Black,
  WhitePurple,
  LightPurple,
  SizeMiddleRem,
  White,
  BackGroundShadow,
  CommonShadow,
  IconShadow,
  SizeFull,
  PositionCenterRow,
  SizeMaxWidth,
} from '@/style/Common.style';

// ********************** 헤더 **********************
export const HeaderLogo = styled.a`
  ${PositionCenter};
  width: 95.5px;

  @media ${device.MaxWidthL} {
    width: 60.61px;
  }
`;
export const HeaderCont = styled.header<{ $headerData: TypeHeaderData }>`
  width: 100%;
  max-width: ${SizeMaxWidth};
  height: fit-content;
  ${PositionCenterRow};
  position: fixed;
  top: 0;
  z-index: 998;
  background-color: ${({ $headerData }) => $headerData};
  ${({ $scroll, $headerData }) => $headerData !== Black && $scroll && IconShadow}

  ${HeaderLogo} {
    > svg {
      > path {
        fill: ${({ $headerData }) => {
          switch ($headerData) {
            case LightPurple:
            case Black:
              return White;
            case WhitePurple:
              return Black;
          }
        }};

        &:nth-child(7) {
          fill: #ed02d0;
        }
        &:nth-child(8) {
          fill: #2d0ed0;
        }
      }
    }
  }
`;
export const HeaderInner = styled.div`
  width: 100%;
  height: ${SizeLargeRem};
  ${CenterAlign};
  justify-content: flex-end;
  margin: 0 auto;
  position: relative;

  @media ${device.MaxWidthL} {
    height: ${SizeMiddleRem};
  }
`;
