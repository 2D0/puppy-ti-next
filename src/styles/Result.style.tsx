import styled, { css } from 'styled-components';
import Image from 'next/image';
import {
  ContentsInner,
  CommonShadow,
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
} from '@styles/Common.style';
import Device from '@styles/Device.style';

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

  @media ${Device.MaxWidthL} {
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
