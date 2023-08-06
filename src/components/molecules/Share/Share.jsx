import React, {useState} from 'react';
import Image from 'next/image';

//스타일
import * as A from '@/components/molecules/Share/Share.style';

//이미지
import {SnsFaceBook, SnsKakao, SnsTwitter, SnsLink} from  '@/assets/img/Icons/index';
import facebook from './../../../assets/img/Icons/ico-facebook.svg';
import kakao from '@/assets/img/Icons/ico-kakao.svg';
import twitter from '@/assets/img/Icons/ico-twitter.svg';
import link from '@/assets/img/Icons/ico-link.svg';
const Share = () => {
  const snsImg = [facebook, kakao, twitter, link];
  return (
    <>
      <A.ShareMolecules>
        <A.ShareButtonAtom href='/'>
          <Image src={SnsFaceBook} />
        </A.ShareButtonAtom>
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
