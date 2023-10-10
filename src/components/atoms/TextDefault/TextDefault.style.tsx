import styled, { css } from 'styled-components';
import { SizeDefaultRem, SizeDefaultSmallRem } from '@styles/Common.style';
import device from '@styles/Device.style';
import Link from 'next/link';

export const DefaultTextShape = css`
  font-size: ${SizeDefaultRem};
  color: ${({ $color }) => $color};

  @media ${device.MaxWidthL} {
    font-size: ${SizeDefaultSmallRem};
  }
`;

export const DefaultText = styled.span`
  ${DefaultTextShape}
`;
export const DefaultTextLink = styled(Link)`
  ${DefaultTextShape}
`;
