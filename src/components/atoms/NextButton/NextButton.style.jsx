import styled, { css } from 'styled-components';
import { Center, FontWhite, BgPurple, BgUnable, CommonBox, CommonShadow, BgLightPurple } from '@/style/Common.style.jsx';

export const NextButton = styled.button`
  ${Center}
  ${BgUnable}
  ${FontWhite}
  ${CommonBox}
  ${CommonShadow}
  
  ${({ buttonHandler }) => {
    //텍스트 입력할 경우 버튼 Able
    return buttonHandler !== ''
      ? BgLightPurple
      : css`
          cursor: default;
        `;
  }}
`;
