import styled from 'styled-components';
import { White, LightPurple, CommonShadow, PositionFit, SizeSmallRem, SizeRegularRem, SizeDefaultSmallRem } from '@/style/Common.style.jsx';

// ********************* 퍼센트 바 ********************
export const PercentBar = styled.div`
  width: 100%;
  height: ${SizeDefaultSmallRem};
  border-radius: 0.25rem; //4px
  overflow: hidden;
  position: relative;
  background-color: ${White};

  ${({ $percent }) => $percent !== 100 && CommonShadow};
`;
export const PercentBarFill = styled.div`
  ${PositionFit};
  width: ${({ $percent }) => $percent}%;
  height: 100%;
  transition: all 1s ease;
  background-color: ${LightPurple};
`;
