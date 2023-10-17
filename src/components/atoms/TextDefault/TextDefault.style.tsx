import styled, { css } from 'styled-components';
import { SizeDefaultRem, SizeDefaultSmallRem } from '@styles/Common.style';
import device from '@styles/Device.style';
import Link from 'next/link';
import { color, TypeTextData } from 'interface';

export const DefaultTextShape = css`
  font-size: ${SizeDefaultRem};

  @media ${device.MaxWidthL} {
    font-size: ${SizeDefaultSmallRem};
  }
`;

export const DefaultText = styled.span<{ $color: color }>`
  ${DefaultTextShape};
  color: ${({ $color }) => $color};
`;
export const DefaultTextLink = styled(Link)<{ $color: color }>`
  ${DefaultTextShape};
  color: ${({ $color }) => $color};
`;
