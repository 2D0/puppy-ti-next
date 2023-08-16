import styled from 'styled-components';
import { BgWhite, CommonBox, CommonShadow, FontGray } from '@/style/Common.style.jsx';
export const InputBox = styled.input`
  border: none;
  ${CommonBox}
  ${CommonShadow}
  ${BgWhite}
  
  &::placeholder {
    ${FontGray}
  }
`;
