import styled from 'styled-components';
import { BgBlack, BgCommon } from '@/style/Common.style';

export const Body = styled.body`
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  padding-top: 85px;
  box-shadow: 0 0 15px rgb(0 0 0 / 15%);
  position: relative;
  overflow: hidden;
  ${BgCommon}
  ${({ percent }) => percent === 100 && BgBlack}
`;
