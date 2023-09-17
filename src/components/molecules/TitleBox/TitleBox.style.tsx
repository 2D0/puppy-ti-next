import styled from 'styled-components';
import { SizeExtraRem, SizeMediumLargeRem } from '@/style/Common.style';
import device from '@/style/Device.style';

export const TitleWrap = styled.div`
  color: ${({ color }) => color};
  > span {
    font-size: ${({ $bigSize }) => ($bigSize ? SizeExtraRem : SizeMediumLargeRem)};
    line-height: 1em;

    @media ${device.MaxWidthFull} {
      font-size: ${({ $bigSize }) => ($bigSize ? '16vw' : '10vw')};
    }
  }
`;

export const TextAccent = styled.span`
  color: ${({ $color }) => $color};
`;
