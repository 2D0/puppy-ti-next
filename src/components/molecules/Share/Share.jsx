import React, { useState } from 'react';
//스타일
import * as A from '@/components/molecules/Share/Share.style';

//이미지
import SvgComponent from '@/assets/img/Icons/SvgComponent';

const Share = () => {
  const snsImg = ['FACEBOOK', 'KAKAO', 'TWITTER', 'LINK'];
  return (
    <>
      <A.ShareWrap>
        {snsImg.map(item => {
          return (
            <A.ShareButtonAtom href="/">
              <SvgComponent data={item} />
            </A.ShareButtonAtom>
          );
        })}
      </A.ShareWrap>
    </>
  );
};
export default Share;
