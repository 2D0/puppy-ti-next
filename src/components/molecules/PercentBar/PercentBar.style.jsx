import styled from 'styled-components';
import { White, LightPurple, CommonShadow, PositionFit, SizeSmallRem, SizeRegularRem } from '@/style/Common.style.jsx';

// ********************* 퍼센트 바 ********************
export const PercentBarFill = styled.div`
  ${PositionFit};
  width: ${({ percent }) => percent}%;

  height: 100%;
  transition: all 1s ease;
  background-color: ${LightPurple};
`;
export const PercentBar = styled.div`
  ${PercentBarFill};
  width: 100%;
  height: ${SizeRegularRem};
  border-radius: 0.313rem; //5px
  overflow: hidden;
  position: relative;
  background-color: ${White};

  ${({ percent }) => percent !== 100 && CommonShadow};
`;
