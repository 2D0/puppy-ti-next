import React from 'react';

//스타일
import { ShareWrap, ShareTit, ShareButtons, ShareButtonAtom } from '@/components/molecules/Share/Share.style';

//컴포넌트
import { DefaultText } from '@/components/atoms';
import SvgComponent from '@/assets/img/Icons/SvgComponent';

const Share = () => {
  const snsImg = ['FACEBOOK', 'KAKAO', 'TWITTER', 'LINK']; //sns 이미지 배열

  return (
    <ShareWrap>
      <ShareTit>
        <SvgComponent data={'SHARE'} />
        <DefaultText data={'공유하기'} />
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
