import styled, { css } from 'styled-components';
import { PositionFit, BackGroundShadow, SizeLargeRem, SizeMiddleRem, PositionAbsolute, SizeMediumLargeRem } from '@styles/Common.style';
import device from '@styles/Device.style';

// ********************** 배경 **********************
export const BackgroundWrap = styled.div`
  ${PositionFit};
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;
export const WaveBlock = styled.div`
  width: 100%;
  height: fit-content;
  //padding-top: ${SizeLargeRem};
  overflow-x: hidden;

  > svg {
    ${BackGroundShadow};
  }

  @media ${device.MaxWidthL} {
    padding-top: ${SizeMiddleRem};
  }
`;
export const SlashBlock = css`
  width: 100%;
  ${PositionAbsolute};
`;
export const SlashPositionColumn = `calc(-20% - -${SizeLargeRem})`;
export const SlashPositionRow = `-32%`;
export const SlashTop = styled.div`
  ${SlashBlock};
  top: ${SlashPositionColumn};
  right: ${SlashPositionRow};

  @media ${device.MaxWidthL} {
    top: calc(-20% - -${SizeMiddleRem});
  }
`;
export const SlashBottom = styled.div`
  ${SlashBlock};
  bottom: ${SlashPositionColumn};
  left: ${SlashPositionRow};

  @media ${device.MaxWidthL} {
    bottom: calc(-20% - -${SizeMediumLargeRem});
  }
`;
