import styled from 'styled-components';
import { Black, SizeLargeRem, WhitePurple, SizeMaxWidth, SizeMiddleRem, SizeExtraRem, SizeDefaultSmallRem } from '@/style/Common.style';
import device from '@/style/Device.style';

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
