import styled from 'styled-components';

export const CheckFootShape = `
  display: block;
  width: auto;
  height: 70px;
  stroke-width: 4px;
  fill: transparent;

  > path {
    display: block;
    width: auto;
    height: 100%;
    fill: #9e446f;
    ${IconShadow}
  }
`;
export const CheckFootBlank = `
  stroke-width: 4px;
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