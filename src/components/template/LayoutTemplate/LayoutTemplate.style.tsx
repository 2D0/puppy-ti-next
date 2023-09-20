import styled from 'styled-components';
import { CenterAlign, SizeFull, SizeMediumRem, SizeMiddleRem, SizeRegularRem, SizeMiddleLargeRem } from '@/style/Common.style';
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
    padding: ${({ $pathName }) => ($pathName === '/check' ? `0 0 ${SizeMiddleRem}} 0` : ` ${SizeMiddleRem}} 0`)};
    gap: ${SizeRegularRem};
  }
`;
