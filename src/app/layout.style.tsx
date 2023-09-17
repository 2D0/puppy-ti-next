import styled from 'styled-components';
import { Black, CenterAlign, SizeFull, SizeMediumRem, SizeLargeRem, WhitePurple, SizeMaxWidth, SizeMiddleRem } from '@/style/Common.style';
import device from '@/style/Device.style';

export const Body = styled.body<{ percent: number }>`
  width: 100%;
  height: 100vh;
  max-width: ${SizeMaxWidth};
  margin: 0 auto;
  padding-top: ${SizeLargeRem};
  position: relative;
  overflow-y: auto;
  background-color: ${({ percent }) => (percent === 100 ? Black : WhitePurple)};

  @media ${device.MaxHeightFull} {
    height: 100%;
  }
  @media ${device.MaxWidthL} {
    padding-top: ${SizeMiddleRem};
  }
`;
export const Main = styled.main`
  ${CenterAlign};
  ${SizeFull};
  flex-direction: column;
  gap: ${SizeMediumRem};
  padding: 4.375rem 0; //68px
  position: relative;
  overflow-x: hidden;
`;
export const SlashBackground = styled.div`
  width: 83%;
  position: absolute;

  > img {
    ${SizeFull}
  }
`;
export const BackImgSlashTop = styled(SlashBackground)`
  top: -10%;
  right: -20%;
`;
export const BackImgSlashBottom = styled(SlashBackground)`
  bottom: -10%;
  left: -20%;
`;
