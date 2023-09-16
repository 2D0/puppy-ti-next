import styled, { css } from 'styled-components';
import { Center, White, CommonShape, CommonShadow, LightPurple, LightGray } from '@/style/Common.style.jsx';

export const NextButton = styled.button`
  background: ${LightGray};
  ${Center};
  ${CommonShape};
  ${CommonShadow};

  ${({ able }) => {
    //input에 텍스트 있을 경우 버튼 색상 보라색으로 전환
    return able
      ? css`
          background: ${LightPurple};
        `
      : css`
          cursor: default;
        `;
  }}

  >span {
    color: ${White};
  }
`;
