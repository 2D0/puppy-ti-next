import styled, { css } from 'styled-components';
import { SizeDefaultRem, SizeDefaultSmallRem } from '@/style/Common.style';
import device from '@/style/Device.style';
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
