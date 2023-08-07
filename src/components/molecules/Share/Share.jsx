import React, {useState} from 'react';
import Image from 'next/image';
//스타일
import * as A from '@/components/molecules/Share/Share.style';

//이미지
import {SnsFaceBook, SnsKakao, SnsTwitter, SnsLink} from  '@/assets/img/Icons/index';
import facebook from '@/assets/img/Icons/ico-facebook.svg?url';
import kakao from '@/assets/img/Icons/ico-kakao.svg?url';
import twitter from '@/assets/img/Icons/ico-twitter.svg?url';
import link from '@/assets/img/Icons/ico-link.svg?url';
const Share = () => {
  const snsImg = [facebook, kakao, twitter, link];
  return (
    <>
      <A.ShareMolecules>
        {snsImg.map((item)=>{
          <A.ShareButtonAtom href='/'>
            {console.log(item)}
            <Image src={item} />
          </A.ShareButtonAtom>
        })}
      </A.ShareMolecules>
    </>
  );
};
export default Share;
