import React, {useState} from 'react';

//스타일
import * as A from '@/components/molecules/Share/Share.style';

//컴포넌트
import ShareButton from "@/components/atoms/ShareButton/ShareButton";

//이미지
import {SnsFaceBook, SnsKakao, SnsTwitter, SnsLink} from  '@/assets/img/Icons/index'

const Share = () => {
  const snsImg = [SnsFaceBook, SnsKakao, SnsTwitter, SnsLink];
  return (
    <>
      {console.log(snsImg)}
      <A.ShareMolecules>
        <ShareButton snsImg={snsImg[0].src}/>
        {snsImg.map((item)=>{
          // {console.log(item)}
          <ShareButton snsImg={item.src}/>
        })}
      </A.ShareMolecules>
    </>
  );
};
export default Share;
