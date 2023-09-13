import styled from 'styled-components';
import Image from 'next/image';

export const SlashBackgroundAtom = styled(Image)`
  width: 83%;
  position: absolute;
  z-index: 2;
`;
export const BackImgSlashTop = styled(SlashBackgroundAtom)`
  top: -10%;
  right: -20%;
`;
export const BackImgSlashBottom = styled(SlashBackgroundAtom)`
  bottom: -10%;
  left: -20%;
`;
