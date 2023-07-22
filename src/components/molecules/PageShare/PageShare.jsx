import styled from 'styled-components';

import {
  FontMediumSize,
  IconShadow,
  PhotoCover,
  flexCenter
} from '@/style/Common.style';

// ********************* 공유하기 ********************
export const CommonShare = styled.div``;
export const CommonShareTit = styled.div`
  gap: 0 8px;
  margin-bottom: 15px;
  ${flexCenter}
`;
export const CommonShareIcon = styled.img`
  width: 22px;
  height: 22px;
`;
export const CommonShareTxt = styled.span`
  ${FontMediumSize}
`;
export const CommonSns = styled.ul`
  gap: 0 15px;
  ${flexCenter}
`;
export const CommonSnsIcon = styled.li``;
export const CommonSnsLink = styled(Link)`
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  ${IconShadow}
`;
export const CommonSnsIconImg = styled.img`
  border-radius: 50%;
  overflow: hidden;
  ${PhotoCover}
`;
