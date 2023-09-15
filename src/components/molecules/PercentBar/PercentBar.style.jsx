import styled from 'styled-components';
import { White, LightPurple, CommonShadow, PositionFit, SizeSmallRem } from '@/style/Common.style.jsx';

// ********************* 퍼센트 바 ********************
export const PercentBarFill = styled.div`
  ${PositionFit};
  height: 100%;
  transition: all 1s ease;
  background-color: ${LightPurple};
`;
export const PercentBar = styled.div`
  ${PercentBarFill};
  width: ${({ percent }) => percent}%;
  height: 3.125rem; //50px
  border-radius: ${SizeSmallRem};
  overflow: hidden;
  position: relative;
  background-color: ${White};

  ${({ percent }) => percent !== 100 && CommonShadow};
`;
