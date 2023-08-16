import styled from 'styled-components';
import {BackGroundShadow} from '@/style/Common.style';

// ********************** 배경 **********************
//배경 박스 이미지
export const BackImgLines = `
  width: 83%;
  position: absolute;
  z-index: 2;
`;
export const BackImgLinesTop = styled.img`
  top: -10%;
  right: -20%;
  ${BackImgLines}
`;
export const BackImgLinesBottom = styled.img`
  bottom: -10%;
  left: -20%;
  ${BackImgLines}
`;
export const BackImgWave = styled.img`
  width: 100%;
  margin-top: -1px;
  z-index: 1;
  position: relative;
  ${BackGroundShadow}
`;
//배경 박스 전체
export const BackCont = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
`;