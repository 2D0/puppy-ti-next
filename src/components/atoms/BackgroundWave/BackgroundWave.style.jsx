import styled from 'styled-components';
import { SizeFull, PositionFit, BackGroundShadow, LightPurple, WhitePurple, SizeMediumLargeRem, SizeMediumRem } from '@/style/Common.style';
import device from '@/style/Device.style';

// ********************** 배경 **********************
export const BackgroundWrap = styled.div`
  width: 100%;
  z-index: -1;
  ${PositionFit};
`;
export const WaveBlock = styled.div`
  width: 100%;
  aspect-ratio: 1 / 0.5;
  border-radius: 0 0 0 ${SizeMediumLargeRem};
  ${BackGroundShadow};
  position: relative;
  z-index: 2;
  background-color: ${LightPurple};

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

  @media ${device.MaxWidthL} {
    border-radius: 0 0 0 ${SizeMediumRem};

    > img {
      width: ${SizeMediumRem};
      height: ${SizeMediumRem};
      bottom: -${SizeMediumRem};
    }

    &:before {
      width: ${SizeMediumRem};
      height: ${SizeMediumRem};
    }
  }
`;
