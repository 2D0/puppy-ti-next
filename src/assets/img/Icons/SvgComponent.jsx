import React from 'react';
import Image from 'next/image';

//이미지
import TransEn from '@/assets/img/Icons/ico-trans_en.svg?url';
import TransKo from '@/assets/img/Icons/ico-trans_ko.svg?url';
import Facebook from '@/assets/img/Icons/ico-facebook.svg?url';
import Kakao from '@/assets/img/Icons/ico-kakao.svg?url';
import Twitter from '@/assets/img/Icons/ico-twitter.svg?url';
import Link from '@/assets/img/Icons/ico-link.svg?url';
import Back from '@/assets/img/Icons/ico-back.svg?url';
import Share from '@/assets/img/Icons/ico-share.svg?url';

const SvgComponent = ({ data }) => {
  const isDiscernIcon = ({ data }) => {
    switch (data.name) {
      case 'EN':
        return TransEn;
      case 'KO':
        return TransKo;
      case 'BACK':
        return Back;
      case 'SHARE':
        return Share;
      case 'LINK':
        return Link;
      case 'FACEBOOK':
        return Facebook;
      case 'KAKAO':
        return Kakao;
      case 'TWITTER':
        return Twitter;
      default:
        break;
    }
  };
  const Icon = isDiscernIcon({ data });

  return (
    <>
      <Image src={Icon} heigh="auto" alt={data.name} fill={data.fill} />
    </>
  );
};

export default SvgComponent;
