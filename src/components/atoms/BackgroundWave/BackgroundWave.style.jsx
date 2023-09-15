import styled from 'styled-components';
import { SizeFull, PositionFit, BackGroundShadow, LightPurple, WhitePurple } from '@/style/Common.style';
import device from '@/style/Device.style';

// ********************** 배경 **********************
export const BackgroundWrap = styled.div`
  width: 100%;
  z-index: -1;
  ${PositionFit};
`;
export const WaveBlock = styled.div`
  width: 100%;
  height: calc(423px - 5vh);
  border-radius: 0 0 0 80px;
  ${BackGroundShadow};
  position: relative;
  z-index: 2;
  background-color: ${LightPurple};

  @media ${device.MaxHeightS} {
    height: 380px;
  }

  > img {
    width: 80px;
    height: 80px;
    position: absolute;
    bottom: -80px;
    right: 0;
    z-index: 1;
    filter: drop-shadow(4px 4px 11px rgba(79, 0, 216, 0.3));
  }
  &:before {
    content: '';
    display: block;
    width: 100px;
    height: 100px;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: ${LightPurple};
  }
`;
export const WhitePurpleBlock = styled.div`
  ${SizeFull};
  height: 100px;
  position: relative;
`;
