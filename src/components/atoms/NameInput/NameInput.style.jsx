import styled, { css } from 'styled-components';
import { CommonShape, CommonShadow, SizeDefaultRem, Gray, White } from '@styles/Common.style.tsx';
export const InputBox = styled.input`
  border: none;
  background-color: ${White};
  ${CommonShape};
  ${CommonShadow};

  &::placeholder {
    ${css`
      color: ${Gray};
    `}
  }
`;
