import styled from 'styled-components';
import { BgBlack, BgCommon } from '@/style/Common.style';
import { SlashBackgroundAtom } from '@/components/atoms/BackgroundSlash/BackgroundSlash.style';
import Image from 'next/image';

export const Body = styled.body`
  width: 100%;
  height: 100vh;
  max-width: 750px;
  margin: 0 auto;
  box-shadow: 0 0 15px rgb(0 0 0 / 15%);
  position: relative;
  overflow-y: auto;
  ${BgCommon}
  ${({ percent }) => percent === 100 && BgBlack}
`;
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3vh;
  width: 100%;
  height: 100%;
  padding-top: 85px;
  position: relative;
`;
export const SlashBackground = styled.div`
  width: 83%;
  position: absolute;
  z-index: 2;
`;
export const BackImgSlashTop = styled(SlashBackground)`
  top: -10%;
  right: -20%;
`;
export const BackImgSlashBottom = styled(SlashBackground)`
  bottom: -10%;
  left: -20%;
`;
