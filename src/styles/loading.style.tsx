import styled, { css, keyframes } from 'styled-components';
import { WhitePurple, PositionFit, Center, SmallIconShadow, SizeMaxWidth } from '@styles/Common.style';
import device from '@styles/Device.style';
const keyframeOption = (first, second, tired) => keyframes`
0%{${first}}
50%{ ${second}}
100%{${tired}}
`;

const upAndDownOption = (option, duration, delay) => css`
  display: block;
  animation: ${option} ${duration}s ${delay}s infinite linear alternate;
`;
export const LoadingWrap = styled.div`
  ${Center};
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: ${SizeMaxWidth};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  background-color: ${WhitePurple};

  > div {
    > span {
      text-shadow:
        8px 6px 15px rgba(0, 0, 0, 0.11),
        -1px -1px 9px #fff,
        2px 2px 7px rgba(39, 0, 121, 0.07);
    }
  }
`;
export const ToesWrap = styled.div`
  width: 253px;
  height: 214px;
  position: relative;

  @media ${device.MaxWidthL} {
    width: 179.63px;
    height: 151.93px;
  }
`;
export const ToeComponent = styled.div`
  position: absolute;
  ${SmallIconShadow};
`;
export const ToeComponent1 = styled(ToeComponent)`
  width: 60px;
  height: 73.5px;
  top: 60px;
  left: 0;
  ${upAndDownOption(keyframeOption('top:60px', 'top:35px', 'top:60px'), 1.4, 0)};

  @media ${device.MaxWidthL} {
    width: 42.1px;
    height: 47.93px;
    top: 43px;
    ${upAndDownOption(keyframeOption('top:43px', 'top:30px', 'top:43px'), 1.4, 0)};
  }
`;

export const ToeComponent2 = styled(ToeComponent)`
  width: 58px;
  height: 80.5px;
  top: 0;
  left: 61px;
  ${upAndDownOption(keyframeOption('top:0px', 'top:-25px', 'top:0'), 1.4, 0.3)};

  @media ${device.MaxWidthL} {
    width: 39.94px;
    height: 53.68px;
    left: 44px;
    ${upAndDownOption(keyframeOption('top:0px', 'top:-13px', 'top:0'), 1.4, 0.3)};
  }
`;
export const ToeComponent3 = styled(ToeComponent)`
  width: 57px;
  height: 83.5px;
  top: 0;
  right: 59px;
  ${upAndDownOption(keyframeOption('top:0', 'top:-25px', 'top:0'), 1.4, 0.6)};

  @media ${device.MaxWidthL} {
    width: 39.94px;
    height: 55.67px;
    right: 42px;
    ${upAndDownOption(keyframeOption('top:0', 'top:-13px', 'top:0'), 1.4, 0.6)};
  }
`;
export const ToeComponent4 = styled(ToeComponent)`
  width: 57px;
  height: 78.5px;
  top: 55px;
  right: 0;
  ${upAndDownOption(keyframeOption('top:55px', 'top:30px', 'top:55px'), 1.4, 0.9)};

  @media ${device.MaxWidthL} {
    width: 39.94px;
    height: 51.69px;
    top: 39px;
    ${upAndDownOption(keyframeOption('top:39px', 'top:26px', 'top:39px'), 1.4, 0.9)};
  }
`;
export const ToeComponentBody = styled(ToeComponent)`
  width: 161px;
  height: 121px;
  bottom: 0;
  left: 52%;
  transform: translateX(-50%);

  @media ${device.MaxWidthL} {
    width: 113.82px;
    height: 79.53px;
  }
`;
