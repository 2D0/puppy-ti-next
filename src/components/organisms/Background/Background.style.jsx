import styled, { css } from 'styled-components';
import device from '@/style/Device.style';
import { LightPurple } from '@/style/Common.style';

// ********************** 배경 **********************
//컨텐츠 상단 배경
export const ContentsBack = styled.div`
  width: 100%;
  height: calc(45vh - 250px);
  position: relative;
  z-index: 2;
  background-color: ${LightPurple};
  @media ${device.MaxHeightS} {
    height: 17.5rem; //280px
  }
`;
//배경 박스 전체
export const BackCont = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;
