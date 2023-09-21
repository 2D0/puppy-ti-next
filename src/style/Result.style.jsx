import styled, { css } from 'styled-components';
import Image from 'next/image';
import {
  FontFamilySub,
  FontPurple,
  ContentsInner,
  SizeDefaultRem,
  Square,
  SquareInner,
  BgWhite,
  PhotoContain,
  CommonShadow,
  FontMediumSize,
  FontExtraSize,
  FontBigSize,
  defaultContMargin,
  subContMargin,
  FontDarkPurple,
  flexItemCenter,
  FontGray,
  PercentBarFill,
  White,
  Purple,
  SizeMediumRem,
  SizeMiddleRem,
  CenterAlign,
  Center,
  SizeExtraRem,
  SizeSmallRem,
  ColumnComponentStyle,
  LightGray,
} from '@/style/Common.style.jsx';
import device from '@/style/Device.style';

// ******************** 컨텐츠 ********************
//컨텐츠
export const ResultCont = styled.div`
  ${ContentsInner}
`;
export const ResultPuppyName = styled.h2`
  ${CenterAlign};
  gap: 0.5rem;
  line-height: 1em;
  text-align: center;
  font-size: ${SizeMediumRem};
`;
export const ResultPuppyNamePoint = styled.span`
  display: inline-block;
  font-size: ${SizeMiddleRem};

  > span {
    line-height: 1em;
    color: ${Purple};
  }
`;
export const ResultBoxShape = css`
  ${ContentsInner};
  background-color: ${White};
  text-align: center;
  border-radius: ${SizeSmallRem};
  ${CommonShadow};
`;
export const ResultCharBox = styled.div`
  ${ResultBoxShape};
  display: grid;
  grid-template-rows: ${SizeExtraRem} 1fr;
  gap: 5% 0;
  height: auto;
  aspect-ratio: 1;
  padding: 7% 5% 5%;

  @media ${device.MaxWidthL} {
    grid-template-rows: 16vw 1fr;
  }
`;
export const ResultBoxMbtiName = styled.span`
  font-size: ${SizeExtraRem};
`;
export const ResultBoxChar = styled.div`
  width: 70%;
  margin: 0 auto;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export const ResultBoxCharImg = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
export const ResultPercentCont = styled.div`
  margin-bottom: 40px;
`;
export const ResultPercentBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 40px;
`;
export const ResultPercentList = styled.li`
  ${PercentBarFill} {
    ${({ percent }) =>
      percent >= 100 - percent
        ? css`
            left: 0;
            right: initial;
            width: ${percent}%;
          `
        : css`
            left: initial;
            right: 0;
            width: ${100 - percent}%;
          `};
  }
`;
export const ResultPercentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  position: relative;
  z-index: 2;
`;
export const ResultPercentNames = styled.div`
  gap: 0 10px;
  ${flexItemCenter}

  > span {
    ${FontGray}

    ${({ resultType }) =>
      resultType &&
      css`
        ${FontDarkPurple}
      `}
`;
export const ResultPercentName = styled.span`
  font-weight: 500;
  font-size: ${SizeDefaultRem};
`;
export const ResultPercentNum = styled.span`
  font-size: ${SizeDefaultRem};
`;
export const ResultTxtBox = styled.div`
  ${ResultBoxShape};
  padding: ${SizeMediumRem} calc(${SizeMediumRem} / 2);
`;
export const ResultTxt = styled.span`
  line-height: 1.8em;
  font-size: 1rem;
`;
export const PercentBarList = styled.div`
  ${ColumnComponentStyle};
  ${ContentsInner};
`;
export const PercentBarText = styled.div`
  ${CenterAlign};
  justify-content: space-between;
  padding: 0 1rem;
  position: relative;
  z-index: 1;
`;
