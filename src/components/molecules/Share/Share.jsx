import React from 'react';

//스타일
import {ShareWrap, ShareButtons, ShareButtonAtom} from '@/components/molecules/Share/Share.style';

//이미지
import SvgComponent from '@/assets/img/Icons/SvgComponent';

const Share = () => {
  const snsImg = ['FACEBOOK', 'KAKAO', 'TWITTER', 'LINK'];

  return (
    <>
      <ShareWrap>
        <div>
          <SvgComponent data={'SHARE'} />
          <span>공유하기</span>
        </div>
        <div>
          {snsImg.map(item => {
            return (
              <ShareButtonAtom href="/">
                <SvgComponent data={item} />
              </ShareButtonAtom>
            );
          })}
        </div>
      </ShareWrap>
    </>
  );
};

export default Share;
