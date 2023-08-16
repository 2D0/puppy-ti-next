import React from 'react';
import Image from 'next/image';

//이미지
import Facebook from '@/assets/img/Icons/ico-facebook.svg?url';
import Kakao from '@/assets/img/Icons/ico-kakao.svg?url';
import Twitter from '@/assets/img/Icons/ico-twitter.svg?url';
import Link from '@/assets/img/Icons/ico-link.svg?url';
import Back from '@/assets/img/Icons/ico-back.svg?url';
import Share from '@/assets/img/Icons/ico-share.svg?url';

const isDiscernIcon = ({ data }) => {
  switch (data) {
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

const SvgComponent = ({ data }) => {
  const Icon = isDiscernIcon({ data });

  return (
    <>
      <Image src={Icon} alt={data} />
    </>
  );
};

export default SvgComponent;
