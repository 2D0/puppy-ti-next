import styled, { css } from 'styled-components';
import device from '@/style/Device.style';

// ********************** 색상 **********************
export const White = `#fff`;
export const Black = `#333`;
export const LightGray = `#ccc`;
export const Gray = `#888`;
export const Purple = `#7846D0`;
export const WhitePurple = `#F4EEFF`;
export const LightPurple = `#C4A5FA`;
export const DarkPurple = `#1C0E35`;
export const Pink = `#9E446F`;

// ********************* 사이즈 ********************
//100% 사이즈
export const SizeFull = css`
  width: 100%;
  height: 100%;
`;
export const SizeMaxWidth = `750px`;
export const SizeSmallRem = `0.625rem`; //10px
export const SizeDefaultSmallRem = `0.938rem`; //15px;
export const SizeDefaultRem = `1.063rem`; //17px;
export const SizeRegularRem = `1.563rem`; //25px;
export const SizeMediumRem = `2.5rem`; //40px;
export const SizeMiddleRem = `3.75rem`; //60px;
export const SizeMediumLargeRem = `5rem`; //80px;
export const SizeLargeRem = `5.33rem`; //85px;
export const SizeExtraRem = `6.875rem`; //110px;

// ********************** 정렬 **********************
//display 중앙
export const Flex = css`
  display: flex;
`;
export const CenterJustify = css`
  ${Flex};
  justify-content: center;
`;
export const CenterAlign = css`
  ${Flex};
  align-items: center;
`;
export const Center = css`
  ${CenterJustify};
  align-items: center;
`;

//position 중앙
export const PositionAbsolute = css`
  position: absolute;
`;
export const PositionCenter = css`
  ${PositionAbsolute};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const PositionCenterRow = css`
  ${PositionAbsolute};
  left: 50%;
  transform: translateX(-50%);
`;
export const PositionCenterCol = css`
  ${PositionAbsolute};
  top: 50%;
  transform: translateY(-50%);
`;
export const PositionFit = css`
  ${PositionAbsolute};
  top: 0;
  left: 0;
`;

// ******************** 그림자 ********************
export const CommonShadow = css`
  box-shadow:
    4px 4px 7px rgba(0, 0, 255, 0.07),
    5px 0 29px #ffffff,
    6px 6px 36px rgba(0, 0, 0, 0.06);
`;
export const IconShadow = css`
  box-shadow:
    2px 2px 7px rgba(39, 0, 121, 0.07),
    -2px -2px 9px #ffffff,
    8px 6px 15px rgba(0, 0, 0, 0.11);
`;
export const SmallIconShadow = css`
  filter: drop-shadow(2px 2px 7px rgba(39, 0, 121, 0.07)) drop-shadow(-1px -1px 9px #ffffff) drop-shadow(8px 6px 15px rgba(0, 0, 0, 0.11));
`;
export const BackGroundShadow = css`
  filter: drop-shadow(4px 4px 11px rgba(39, 0, 121, 0.07)) drop-shadow(-4px -4px 20px rgba(79, 0, 216, 0.3))
    drop-shadow(10px 2px 36px rgba(219, 206, 242, 0.3));
`;

// ******************** 형태 ********************
//컨텐츠 이너
export const ContentsInner = css`
  width: calc(100% - ${SizeMiddleRem});
  margin: 0 auto;

  @media ${device.MaxWidthL} {
    width: calc(100% - ${SizeRegularRem});
  }
`;
//기본 버튼, 인풋 모양
export const CommonShape = css`
  ${ContentsInner};
  height: 3.75rem; //60px
  border-radius: ${SizeSmallRem};
  text-align: center;
  font-size: ${SizeDefaultRem};

  @media ${device.MaxWidthL} {
    font-size: ${SizeDefaultSmallRem};
  }
`;

// ******************** 기능 ********************
//웹 접근성 : 텍스트 숨기기
export const A11yHidden = styled.span`
  display: block;
  width: 1px;
  height: 1px;
  margin: -1px 0 -1px 0;
  position: absolute;
  right: -9999px;
  overflow: hidden;
  white-space: nowrap;
`;
//컴포넌트
export const ColumnComponent = styled.div`
  ${CenterAlign};
  flex-direction: column;
  gap: 0.938rem;
  width: 100%;
`;

// ********************** 모양 **********************
//컨텐츠
export const Wrap = styled.div`
  width: 100%;
  max-width: ${SizeMaxWidth};
  margin: 0 auto;
  padding-top: ${SizeLargeRem};
  box-shadow: 0 0 15px rgb(0 0 0 / 15%);
  position: relative;
  overflow: hidden;
  background-color: ${({ percent }) => (percent === 100 ? Black : White)};
`;
