import styled from 'styled-components';
import { BgWhite, CommonBox, CommonShadow, ContentsInner, FontDefaultSize, FontGray } from '@/style/Common.style.jsx';
export const InputBox = styled.input`
  border: none;
  font-size: ${FontDefaultSize};
  ${CommonBox}
  ${CommonShadow}
  ${BgWhite}
  &::placeholder {
    ${FontGray}
  }
`;
