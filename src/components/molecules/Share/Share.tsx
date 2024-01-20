import React from 'react';

//이미지
import ShareSvg from '@images/Icons/ico-share.svg';
import FacebookSvg from '@/assets/img/Icons/ico-facebook.svg';
import KakaoSvg from '@/assets/img/Icons/ico-kakao.svg';
import TwitterSvg from '@/assets/img/Icons/ico-twitter.svg';
import LinkSvg from '@/assets/img/Icons/ico-link.svg';

//스타일
import { ShareTit } from '@molecules/Share/Share.style';
import { ColumnComponent } from '@styles/Common.style';

//컴포넌트
import { TextDefault, SvgComponent } from '@atoms/index';
import { IconButtonList } from '@molecules/index';

const Share = () => {
  const shareImgData = {
    name: 'SHARE',
  };
  const snsImgData = [
    { img: ShareSvg },
    { img: FacebookSvg },
    { img: KakaoSvg },
    { img: LinkSvg },
  ];
  const titleData = {
    text: '공유하기',
  };
  return (
    <ColumnComponent>
      <ShareTit>
        <ShareSvg />
        <TextDefault textDefaultData={titleData} />
      </ShareTit>
      <IconButtonList iconData={snsImgData} />
    </ColumnComponent>
  );
};

export default Share;
