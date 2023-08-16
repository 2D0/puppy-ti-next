import styled from 'styled-components';
import Image from 'next/image';
import { BackGroundShadow, BgLightPurple } from '@/style/Common.style';
import device from '@/style/Device.style';

// ********************** 배경 **********************
export const BackgroundWrap = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
`;
export const BackgroundContent = styled.div`
  width: 100%;
  height: calc(45vh - 250px);
  position: relative;
  z-index: 2;
  ${BgLightPurple} @media ${device.MaxHeightS} {
    height: 280px;
  }
`;

export const WaveImage = styled(Image)`
  width: 100%;
  margin-top: -1px;
  z-index: 1;
  position: relative !important;
  object-fit: cover;
  ${BackGroundShadow};
`;
