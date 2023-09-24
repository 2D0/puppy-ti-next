import styled from 'styled-components';
import device from '@/style/Device.style';
import FontGugi from '@/app/api/fonts/FontGugi';

export const SubText = styled.span`
  font-family: ${({ $font }) => $font && 'gugi'}, sans-serif;
  font-size: 2.25rem; //36px
  line-height: 1em;
  color: ${({ $color }) => $color};

  @media ${device.MaxWidthFull} {
    font-size: 5.5vw;
  }
`;
