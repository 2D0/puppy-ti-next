import styled from 'styled-components';
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
} from '@/style/Common.style';
import device from '@/style/Device.style';

export const Main = styled.main`
  ${CenterAlign};
  ${SizeFull};
  flex-direction: column;
  gap: ${SizeMediumRem};
  position: relative;
  overflow-x: hidden;
  padding: ${({ $pathName }) => ($pathName === '/check' ? `0 0 ${SizeMiddleLargeRem} 0` : ` ${SizeMiddleLargeRem} 0`)};

  @media ${device.MaxWidthL} {
    padding: ${({ $pathName }) => ($pathName === '/check' ? `0 0 ${SizeMiddleRem} 0` : ` ${SizeMiddleRem} 0`)};
    gap: ${SizeRegularRem};
  }
`;
export const Body = styled.body<{ percent: number }>`
  width: 100%;
  height: 100vh;
  max-width: ${SizeMaxWidth};
  margin: 0 auto;
  padding-top: ${({ $pathName }) =>
    $pathName === '/check' ? `calc(6.25rem + ${SizeExtraRem} + (${SizeDefaultSmallRem} * 2) )` : '4.375rem'};
  position: relative;
  overflow-y: auto;
  background-color: ${({ percent }) => (percent === 100 ? Black : WhitePurple)};

  @media ${device.MaxHeightFull} {
    height: 100%;
  }
  @media ${device.MaxWidthL} {
    padding-top: ${({ $pathName }) => ($pathName === '/check' ? `calc(${SizeLargeRem} + (${SizeExtraRem} * 2) )` : `${SizeMiddleRem}`)};
  }
`;
