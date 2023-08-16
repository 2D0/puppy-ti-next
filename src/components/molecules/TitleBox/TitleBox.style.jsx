import styled from 'styled-components';

export const TitleWrap = styled.div`
  > span {
    font-size: ${({ shape }) => (shape === 'BIG' ? '90px' : '60px')};
  }
`;
