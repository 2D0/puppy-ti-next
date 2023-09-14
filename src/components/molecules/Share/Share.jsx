import React from 'react';

//스타일
import { ShareWrap, ShareTit, ShareButtons, ShareButtonAtom } from '@/components/molecules/Share/Share.style';

//컴포넌트
import { TextDefault } from '@/components/atoms';
import SvgComponent from '@/assets/img/Icons/SvgComponent';

const Share = () => {
  const snsImg = ['FACEBOOK', 'KAKAO', 'TWITTER', 'LINK']; //sns 이미지 배열
  const titleData = {
    text: '공유하기',
  };
  return (
    <ShareWrap>
      <ShareTit>
        <SvgComponent data={'SHARE'} />
        <TextDefault shape={titleData} />
      </ShareTit>
      <ShareButtons>
        {snsImg.map(item => {
          return (
            <ShareButtonAtom href="/">
              <SvgComponent data={item} />
            </ShareButtonAtom>
          );
        })}
      </ShareButtons>
    </ShareWrap>
  );
};

export default Share;
