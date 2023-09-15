import styled from 'styled-components';
import device from '@/style/Device.style';

export const SubText = styled.span`
  font-size: 2.25rem; //36px
  line-height: 1em;
  color: ${({ color }) => color};

  @media ${device.MaxWidthFull} {
    font-size: 5.5vw;
  }
`;
