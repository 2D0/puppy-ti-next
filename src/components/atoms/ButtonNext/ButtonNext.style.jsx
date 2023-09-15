import styled, { css } from 'styled-components';
import { Center, White, CommonShape, CommonShadow, LightPurple, LightGray } from '@/style/Common.style.jsx';

export const NextButton = styled.button`
  background: ${LightGray};
  ${Center};
  ${CommonShape};
  ${CommonShadow};

  ${({ able }) => {
    able;
    //텍스트 입력할 경우 버튼 Able
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
