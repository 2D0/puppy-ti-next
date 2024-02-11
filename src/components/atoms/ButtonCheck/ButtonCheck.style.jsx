import styled, { css } from 'styled-components';
import { IconShadow } from '@styles/Common.style';

export const StrockeWidth = `0.25rem`; //4px
export const CheckFootShape = css`
  display: block;
  width: auto;
  height: 4.375rem; //70px
  stroke-width: ${StrockeWidth};
  fill: transparent;

  > path {
    display: block;
    width: auto;
    height: 100%;
    fill: #9e446f;
    ${IconShadow}
  }
`;
export const CheckFootBlank = css`
  stroke-width: ${StrockeWidth};
  fill: transparent;
`;
export const CheckButtonAtom = styled.span`
  svg {
    ${CheckFootShape}
    > path {
      ${CheckFootBlank};
    }
  }
`;
