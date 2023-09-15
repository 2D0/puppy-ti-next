import styled from 'styled-components';
import { Black, WhitePurple } from '@/style/Common.style';

export const Wrap = styled.body`
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  padding-top: ${SizeLargeRem};
  box-shadow: 0 0 0.875rem rgb(0 0 0 / 15%); //14x
  position: relative;
  overflow: hidden;
  background-color: ${({ percent }) => (percent === 100 ? Black : WhitePurple)};
`;
