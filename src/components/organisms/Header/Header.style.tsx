import styled from 'styled-components';
import device from '@/style/Device.style';
import { TypeHeaderData } from '@/app/TypeData';
import { CenterAlign, PositionCenter, SizeLargeRem, Black, WhitePurple, LightPurple, SizeMiddleRem, White } from '@/style/Common.style';

// ********************** 헤더 **********************
export const HeaderCont = styled.header<{ $headerData: TypeHeaderData }>`
  width: 100%;
  max-width: 750px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  z-index: 998;
  background-color: ${({ $headerData }) => $headerData};
`;
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
export const HeaderLogo = styled.a`
  ${PositionCenter};
  width: 95.5px;

  > svg {
    > path {
      fill: ${({ $headerData }) => $headerData};
      &:nth-child(7) {
        fill: #ed02d0;
      }
      &:nth-child(8) {
        fill: #2d0ed0;
      }
    }
  }

  @media ${device.MaxWidthL} {
    width: 76.4px;
  }
`;
