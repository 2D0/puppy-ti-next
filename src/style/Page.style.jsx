import styled from 'styled-components';
import { SlashBackgroundAtom } from '@/components/atoms/BackgroundSlash/BackgroundSlash.style';
import device from '@/style/Device.style';

export const MainChar = styled.div`
  width: 75%;
  height: auto;

  > img {
    width: 100%;
    height: 100%;
  }

  @media ${device.MaxWidthL} {
    width: 85%;
  }
`;
