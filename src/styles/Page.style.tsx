import styled from 'styled-components';
import Device from '@styles/Device.style';
import { ColumnComponentStyle } from '@styles/Common.style';

export const MainChar = styled.div`
  width: 75%;
  height: auto;

  > img {
    width: 100%;
    height: 100%;
  }

  @media ${Device.MaxWidthL} {
    width: 85%;
  }
`;
export const MainForm = styled.form`
  ${ColumnComponentStyle};
  width: 100%;
  align-items: center;
`;
