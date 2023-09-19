import styled from 'styled-components';
import device from '@/style/Device.style';
import { ColumnComponentStyle } from '@/style/Common.style';

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
export const MainForm = styled.form`
  ${ColumnComponentStyle}
`;
