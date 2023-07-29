import styled, {css} from 'styled-components';
import {
  FlexItemCenter,
  Center,
  BgCommon,
  BgLightPurple,
  SmallIconShadow, BoxCenter
} from "@/style/Common.style";

// ********************** 헤더 **********************
export const HeaderInner = styled.div`
  justify-content: flex-end;
  width: calc(100% - 30px);
  height: 85px;
  margin: 0 auto;
  position: relative;
  ${FlexItemCenter}
`;
export const HeaderLogo = styled.h1`
  width: auto;
  height: 60%;
  ${BoxCenter}
`;
export const HeaderLogoImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;
export const HeaderSwitch = styled.div`
  width: fit-content;
  gap: 0 12px;
  ${FlexItemCenter}
`;
export const HeaderSwitchIcon = styled.button`
  width: 40px;
  height: 40px;
  position: relative;
  ${Center}
`;
export const HeaderSwitchImg = styled.img`
  display: block;
  width: 35px;
  height: 35px;
`;
export const HeaderCont = styled.header`
  width: 100%;
  max-width: 750px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  z-index: 998;
  //padding-top: calc(env(safe-area-inset-bottom) + 10px);

  ${({scrollHeader}) =>
    scrollHeader &&
    css`
      box-shadow: 0 0 7px #dcd5e8;
    `};

  ${({location, percent}) => {
    switch (location) {
      case '/check':
        return percent === 100 ? BgBlack : BgCommon;
      case '/result':
        return BgCommon;
      default:
        return BgLightPurple;
    }
  }};

  ${HeaderSwitchImg} {
    ${({percent}) => percent !== 100 && SmallIconShadow}
  }
`;