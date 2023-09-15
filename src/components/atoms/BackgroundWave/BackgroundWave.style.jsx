import styled from 'styled-components';
import { SizeFull, PositionFit, BackGroundShadow, LightPurple, WhitePurple, SizeMediumLargeRem } from '@/style/Common.style';
import device from '@/style/Device.style';

// ********************** 배경 **********************
export const BackgroundWrap = styled.div`
  width: 100%;
  z-index: -1;
  ${PositionFit};
`;
export const WaveBlock = styled.div`
  width: 100%;
  height: calc(3.125rem - 5vh); //423px
  border-radius: 0 0 0 ${SizeMediumLargeRem};
  ${BackGroundShadow};
  position: relative;
  z-index: 2;
  background-color: ${LightPurple};

  @media ${device.MaxHeightS} {
    height: 23.75rem; //380px
  }

  > img {
    width: ${SizeMediumLargeRem};
    height: ${SizeMediumLargeRem};
    position: absolute;
    bottom: -${SizeMediumLargeRem};
    right: 0;
    z-index: 1;
    filter: drop-shadow(4px 4px 11px rgba(79, 0, 216, 0.3));
  }
  &:before {
    content: '';
    display: block;
    width: ${SizeMediumLargeRem};
    height: ${SizeMediumLargeRem};
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: ${LightPurple};
  }
`;
