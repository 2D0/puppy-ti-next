import styled from 'styled-components';
import { TypeUrl } from 'interface';

import {
  CenterAlign,
  SizeFull,
  SizeMediumRem,
  SizeMiddleRem,
  SizeRegularRem,
  SizeMiddleLargeRem,
  SizeMaxWidth,
  SizeExtraRem,
  SizeDefaultSmallRem,
  Black,
  WhitePurple,
  SizeLargeRem,
} from '@styles/Common.style';
import Device from '@styles/Device.style';

export const Main = styled.main<{ $pathName: TypeUrl }>`
  ${CenterAlign};
  ${SizeFull};
  flex-direction: column;
  gap: ${SizeMediumRem};
  position: relative;
  overflow-x: hidden;
  padding: ${({ $pathName }) =>
    $pathName === '/check'
      ? `0 0 ${SizeMiddleLargeRem} 0`
      : ` ${SizeMiddleLargeRem} 0`};

  @media ${Device.MaxWidthL} {
    padding: ${({ $pathName }) =>
      $pathName === '/check'
        ? `0 0 ${SizeMiddleRem} 0`
        : ` ${SizeMiddleRem} 0`};
    gap: ${SizeRegularRem};
  }
`;
export const Body = styled.body<{
  $pathName: TypeUrl;
  $percent: number;
}>`
  width: 100%;
  height: 100vh;
  max-width: ${SizeMaxWidth};
  margin: 0 auto;
  padding-top: ${({ $pathName }) =>
    $pathName === '/check'
      ? `calc(6.25rem + ${SizeExtraRem} + (${SizeDefaultSmallRem} * 2) )`
      : '4.375rem'};
  position: relative;
  overflow-y: auto;
  background-color: ${({ $percent }) =>
    $percent === 100 ? Black : WhitePurple};

  @media ${Device.MaxHeightFull} {
    height: 100%;
  }
  @media ${Device.MaxWidthL} {
    padding-top: ${({ $pathName }) =>
      $pathName === '/check'
        ? `calc(${SizeLargeRem} + (${SizeExtraRem} * 2) )`
        : `${SizeMiddleRem}`};
  }
`;
